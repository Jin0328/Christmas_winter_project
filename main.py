from fastapi import FastAPI
from pydantic import BaseModel
from langchain_upstage import ChatUpstage
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this with specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()  # Load environment variables from .env

# Define the LLM
llm = ChatUpstage()

# Define the prompt template
rag_with_history_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are Santa Claus. Speak in a casual,and informal way. Avoid greetings like '안녕' or '메리 크리스마스' and focus directly on answering the question. Answers must be short within 3 sentences",
        ),
        ("human", "{user_message}"),
    ]
)

# Define the chain
chain = rag_with_history_prompt | llm | StrOutputParser()

# Define input model for the API
class Message(BaseModel):
    message: str

# API endpoint to process the user's message
@app.post("/api/santa-reply/")
async def santa_reply(user_message: Message):
    """
    Endpoint to process a message and return Santa's reply.
    """
    result = chain.invoke({"user_message": user_message.message})
    return {"reply": result}

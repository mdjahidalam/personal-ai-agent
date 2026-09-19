from fastapi import FastAPI

from app.core.config import settings

from app.api.v1.health import router as health_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)

app.include_router(
    health_router,
    prefix="/api/v1",
)


@app.get("/")
async def root():
    return {
        "message": settings.APP_NAME,
        "version": settings.APP_VERSION,
    }
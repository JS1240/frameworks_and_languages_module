
FROM python:3.9.4-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

EXPOSE 8000

COPY . .

CMD ["python3", "manage.py", "runserver", "0:8000"]
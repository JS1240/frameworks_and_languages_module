from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

ITEMS = {
    1: {
        "id": 1,
        "user_id": "user1234",
        "keywords": ["hammer", "nails", "tools"],
        "description": "A hammer and nails set",
        "lat": 1,
        "lon": 1,
        "date_from": "2021-11-22T08:22:39.067408",
    }
}

# Request handler
# request -> response

def say_hello(request):
    # We can pull data from db, send emails, transform data
    #return HttpResponse('Hello World')
    response = JsonResponse({'foo': 'bar'})
    response.status_code = 201
    response.headers['Test'] = 120
    return response

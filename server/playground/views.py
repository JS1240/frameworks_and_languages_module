from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

ITEMS ={}

# Request handler
# request -> response

def say_hello(request):
    # We can pull data from db, send emails, transform data
    #return HttpResponse('Hello World')
    response = JsonResponse({'foo': 'bar'})
    response.status_code = 201
    response.headers['Test'] = 120
    return response

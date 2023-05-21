from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse
from ideas.models import Idea


# Create your views here.

def index(req):
    idea = Idea.objects.order_by("created_at")
    output = []
    for i in idea:
        output.append({
            "title": i.title,
            "desc": i.description,
            "date": i.created_at,
            "user": i.user
        })
    # output = {"title": ", ".join([i.title for i in idea]),
    #           "desc": ", ".join([i.description for i in idea]),
    #           "created_at": ([i.created_at for i in idea]),
    #           "user": ", ".join([i.user for i in idea]),
    #           }
    return HttpResponse(output)
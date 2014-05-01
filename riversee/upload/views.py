from django.shortcuts import render
from django.views.generic import CreateView
from upload.models import Upload


# Create your views here.
class UploadView(CreateView):
    model = Upload
    success_url = '/'
    template_name = 'upload/index.html'
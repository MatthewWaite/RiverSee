from django.shortcuts import render
from django.views.generic import CreateView
from upload.models import Upload
import requests


# Create your views here.
class UploadView(CreateView):
    model = Upload
    success_url = '/'
    template_name = 'upload/index.html'

    def get_context_data(self, **kwargs):
        r = requests.get('http://vimeo.com/api/v2/channel/457116/videos.json')
        if r.status_code == 200:
            kwargs['videos'] = r.json()
        return super(UploadView, self).get_context_data(**kwargs)
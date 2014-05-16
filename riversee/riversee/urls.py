from django.conf.urls import patterns, include, url

from django.contrib import admin
from django.views.generic import TemplateView
from upload.views import UploadView

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', UploadView.as_view(), name='home'),
    url(r'^development1/$', TemplateView.as_view(template_name='upload/development1.html')),
    url(r'^development2/$', TemplateView.as_view(template_name='upload/development2.html')),
    url(r'^development3/$', TemplateView.as_view(template_name='upload/development3.html')),

    url(r'^admin/', include(admin.site.urls)),
)

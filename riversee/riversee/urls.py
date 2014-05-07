from django.conf.urls import patterns, include, url

from django.contrib import admin
from django.views.generic import TemplateView
from upload.views import UploadView

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', UploadView.as_view(), name='home'),

    url(r'^admin/', include(admin.site.urls)),
)

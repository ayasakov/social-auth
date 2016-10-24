"""s_auth URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from __future__ import unicode_literals

from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter

from journal import views

router = DefaultRouter(trailing_slash=False)

router.register(r'journal/comment', views.CommentViewSet,
                base_name='comment')
router.register(r'journal/reply', views.ReplyViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
    url(r'^includes/about.html$',
        TemplateView.as_view(template_name="includes/about.html")),
    url(r'^includes/comments.html$',
        TemplateView.as_view(template_name="includes/comments.html")),
    url(r'^includes/contact.html$',
        TemplateView.as_view(template_name="includes/contact.html")),
    url(r'^includes/home.html$',
        TemplateView.as_view(template_name="includes/home.html")),
    url(r'^', TemplateView.as_view(template_name="index.html")),
]

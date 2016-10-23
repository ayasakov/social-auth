from __future__ import unicode_literals

from rest_framework import viewsets
from rest_framework import filters

from . import models
from . import serializers


class BaseFilterableViewSet(viewsets.ModelViewSet):
    """Base class for support general filters"""
    filter_backends = (filters.DjangoFilterBackend,)


class CommentViewSet(BaseFilterableViewSet):
    """Viewset for viewing and editing comment"""
    queryset = models.Comment.objects.all()
    serializer_class = serializers.CommentSerializer
    filter_fields = ('id', 'name')


class ReplyViewSet(BaseFilterableViewSet):
    """Viewset for viewing and editing reply"""
    queryset = models.Reply.objects.all()
    serializer_class = serializers.ReplySerializer
    filter_fields = ('id', 'name')

from __future__ import unicode_literals

from rest_framework import serializers

from . import models


class CommentSerializer(serializers.ModelSerializer):
    """Serializer for Comment model"""
    class Meta:
        model = models.Comment
        fields = ('id', 'name', 'userpic', 'url', 'text', 'like', 'dislike',
                  'date', 'children')


class ReplySerializer(serializers.ModelSerializer):
    """Serializer for Reply model"""

    class Meta:
        model = models.Reply
        fields = ('id', 'name', 'userpic', 'url', 'text', 'like', 'dislike',
                  'date')

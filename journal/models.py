from __future__ import unicode_literals

from django.db import models


class Comment(models.Model):
    """Describes the comment"""
    name = models.CharField(max_length=128)
    userpic = models.URLField()
    url = models.URLField()
    text = models.TextField()
    like = models.PositiveIntegerField(default=0)
    dislike = models.PositiveIntegerField(default=0)
    date = models.DateTimeField()

    def __unicode__(self):
        return 'Comment: {} (user: {})'.format(self.id, self.name)


class Reply(models.Model):
    """Describes the reply for comment"""
    name = models.CharField(max_length=128)
    userpic = models.URLField()
    url = models.URLField()
    text = models.TextField()
    like = models.PositiveIntegerField(default=0)
    dislike = models.PositiveIntegerField(default=0)
    date = models.DateTimeField()
    parent = models.ForeignKey(Comment, related_name='children')

    def __unicode__(self):
        return 'Reply for {}: user {}'.format(self.parent.id, self.name)



# from django.contrib.auth.mixins import AccessMixin
# from django.http import Http404


# class GroupRequiredMixin(AccessMixin):
#
#
#     def dispatch(self, request, *args, **kwargs):
#
#         if not request.user.is_superuser and not request.user.is_staff:
#             raise Http404()
#         return super().dispatch(request, *args, **kwargs)

from django.contrib.auth.mixins import AccessMixin
from django.http import Http404


class GroupRequiredMixin(AccessMixin):
    allowed_groups = []

    def dispatch(self, request, *args, **kwargs):
        user_groups = set(request.user.groups.values_list('name', flat=True))
        if not user_groups.intersection(set(self.allowed_groups)) and not request.user.is_superuser and \
                not request.user.is_staff:
            raise Http404()

        return super().dispatch(request, *args, **kwargs)


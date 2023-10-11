from django.contrib.auth.mixins import AccessMixin, LoginRequiredMixin
from django.http import Http404
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
from django.views import View
from django.views.generic import CreateView, DetailView, ListView, DeleteView, UpdateView
from .models import Event, EventRegistration
from mixins.mixins import GroupRequiredMixin  # Импортирайте GroupRequiredMixin от вашия mixins.py


class EventListView(LoginRequiredMixin, ListView):
    model = Event
    template_name = 'events/event_list.html'
    context_object_name = 'events'
    paginate_by = 5

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.order_by('-creation_time')

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        # context['categories'] = Category.objects.all()
        return context


class EventDetailView(LoginRequiredMixin, DetailView):
    model = Event
    template_name = 'events/event_detail.html'
    context_object_name = 'event'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        event = self.get_object()
        user = self.request.user
        context['registered'] = EventRegistration.objects.filter(user=user, event=event).exists()
        return context


class EventCreateView(GroupRequiredMixin, CreateView):
    allowed_groups = ['Admins']
    model = Event
    template_name = 'events/event_create.html'
    fields = ['title', 'description', 'start_date', 'end_date', 'start_hour', 'end_hour',
              'location', 'organizers', 'cover_image', 'slide_presentation', 'topics', 'contact_information']
    success_url = reverse_lazy('event_list')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)


class EventUpdateView(GroupRequiredMixin, UpdateView):
    allowed_groups = ['Admins']
    model = Event
    template_name = 'events/event_update.html'
    fields = ['title', 'description', 'start_date', 'end_date', 'start_hour', 'end_hour',
              'location', 'organizers', 'cover_image', 'slide_presentation', 'topics', 'contact_information']
    success_url = reverse_lazy('event_list')


class EventDeleteView(GroupRequiredMixin, DeleteView):
    allowed_groups = ['Admins']
    model = Event
    template_name = 'events/event_confirm_delete.html'
    success_url = reverse_lazy('event_list')


class EventRegistrationView(LoginRequiredMixin, View):
    def post(self, request, pk):
        event = get_object_or_404(Event, pk=pk)
        registration, created = EventRegistration.objects.get_or_create(user=request.user, event=event)
        return redirect('event_detail', pk=event.pk)


class EventUnregistrationView(LoginRequiredMixin, View):
    def post(self, request, pk):
        event = get_object_or_404(Event, pk=pk)
        registration = EventRegistration.objects.filter(user=request.user, event=event).first()
        if registration:
            registration.delete()
        return redirect('event_detail', pk=event.pk)

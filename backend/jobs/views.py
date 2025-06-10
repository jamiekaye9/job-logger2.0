from django.shortcuts import get_object_or_404
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from .auth_serializers import UserRegistrationSerializer, UserSerializer
from .serializers import JobApplicationSerializer, StageSerializer, NoteSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import JobApplication, Stage, Note
from django.contrib.auth.models import User


class UserRegistrationView(generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = [AllowAny]

    def get(self, request):
        """Display the registration form."""
        serializer = self.get_serializer()
        return Response(serializer.data)
    
    def post(self, request):
        """Handle user registration form submission."""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class CustomLoginView(TokenObtainPairView):
    """Extends JWT login to support GET and POST methods."""
    serializer_class = TokenObtainPairSerializer

    def get(self, request, *args, **kwargs):
        serializer = self.get_serializer()
        return Response(serializer.data)

class UserProfileView(APIView):
    """Get and update user profile."""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Retrieve the authenticated user's profile."""
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

    def put(self, request):
        """Update the authenticated user's profile."""
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self, request):
        """Partially update the authenticated user's profile."""
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JobApplicationListCreateView(generics.ListCreateAPIView):
    """GET and POST job applications."""
    permission_classes = [IsAuthenticated]
    serializer_class = JobApplicationSerializer

    def get_queryset(self):
        """Return job applications linked to the authenticated user."""
        return JobApplication.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """Save the job application with the authenticated user."""
        serializer.save(user=self.request.user)

class JobApplicationDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update, or delete a job application."""
    permission_classes = [IsAuthenticated]
    serializer_class = JobApplicationSerializer

    def get_queryset(self):
        """Return job applications linked to the authenticated user."""
        return JobApplication.objects.filter(user=self.request.user)

class StageListCreateView(generics.ListCreateAPIView):
    """GET and POST stages for a job application."""
    permission_classes = [IsAuthenticated]
    serializer_class = StageSerializer

    def get_queryset(self):
        """Return stages linked to the job application."""
        job_application_id = self.kwargs['job_application_id']
        job_application = get_object_or_404(JobApplication, id=job_application_id, user=self.request.user)
        return Stage.objects.filter(job_application=job_application)
    
    def perform_create(self, serializer):
        """Save the stage with the job application."""
        job_application_id = self.kwargs['job_application_id']
        job_application = get_object_or_404(JobApplication, id=job_application_id, user=self.request.user)
        serializer.save(job_application=job_application)

class StageDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update, or delete a stage."""
    permission_classes = [IsAuthenticated]
    serializer_class = StageSerializer

    def get_queryset(self):
        """Return stages linked to the job application."""
        job_application_id = self.kwards['job_application_id']
        job_application = get_object_or_404(JobApplication, id=job_application_id, user=self.request.user)
        return Stage.objects.filter(job_application=job_application)

class NoteListCreateView(generics.ListCreateAPIView):
    """GET and POST notes for a job applicarion"""
    permission_classes = [IsAuthenticated]
    serializer_class = NoteSerializer

    def get_queryset(self):
        """Return notes linked to the job application."""
        job_application_id = self.kwargs['job_application_id']
        job_application = get_object_or_404(JobApplication, id=job_application_id, user=self.request.user)
        return Note.objects.filter(job_application=job_application)
    
    def perform_create(self, serializer):
        """Save the note with the job application."""
        job_application_id = self.kwargs['job_application_id']
        job_application = get_object_or_404(JobApplication, id=job_application_id, user=self.request.user)
        serializer.save(job_application=job_application)

class NoteDetailView(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve, update, or delete a note."""
    permission_classes = [IsAuthenticated]
    serializer_class = NoteSerializer

    def get_queryset(self):
        """Return notes linked to the job application."""
        job_application_id = self.kwargs['job_application_id']
        job_application = get_object_or_404(JobApplication, id=job_application_id, user=self.request.user)
        return Note.objects.filter(job_application=job_application)
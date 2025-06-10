from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import UserRegistrationView, UserProfileView, JobApplicationListCreateView, JobApplicationDetailView, StageListCreateView, StageDetailView, NoteListCreateView, NoteDetailView, CustomLoginView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('profile/', UserProfileView.as_view(), name='user_profile'),
    
    path('applications/', JobApplicationListCreateView.as_view(), name='job_application_list_create'),
    path('applications/<int:pk>/', JobApplicationDetailView.as_view(), name='job_application_detail'),

    path('applications/<int:job_application_id>/stages/', StageListCreateView.as_view(), name='stage_list_create'),
    path('applications/<int:job_application_id>/stages/<int:pk>/', StageDetailView.as_view(), name='stage_detail'),

    path('applications/<int:job_application_id>/notes/', NoteListCreateView.as_view(), name='note_list_create'),
    path('applications/<int:job_application_id>/notes/<int:pk>/', NoteDetailView.as_view(), name='note_detail'),
]
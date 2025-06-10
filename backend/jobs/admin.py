from django.contrib import admin
from .models import JobApplication, Stage, Note

# Register your models here.
@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ('user', 'company', 'position', 'date_applied', 'status', 'salary', 'location', 'job_url', 'contact_person', 'contact_number', 'contact_email')
    search_fields = ('company', 'position', 'user__username', 'location')
    list_filter = ('status', 'date_applied')
    ordering = ('-date_applied',)

@admin.register(Stage)
class StageAdmin(admin.ModelAdmin):
    list_display = ('job_application', 'stage_number', 'stage_type', 'date_time', 'status')
    search_fields = ('job_application__company', 'job_application__position', 'stage_type')
    list_filter = ('status', 'stage_type', 'date_time')
    ordering = ('job_application', 'stage_number')

@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('job_application', 'created_at')
    search_fields = ('job_application__company', 'content')
    list_filter = ('created_at',)
    ordering = ('-created_at',)
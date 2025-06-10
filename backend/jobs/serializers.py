from rest_framework import serializers
from .models import JobApplication, Stage, Note

class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = ['id', 'company', 'position', 'date_applied', 'status', 'salary',
                  'location', 'job_url', 'contact_person', 'contact_number', 'contact_email', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']

class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = ['id', 'job_application', 'stage_number', 'stage_type', 'date_time', 'length', 'status']
        read_only_fields = ['id', 'stage_number']

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'job_application', 'content', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']
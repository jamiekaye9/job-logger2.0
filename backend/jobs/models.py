from django.db import models
from django.contrib.auth.models import User

class JobApplication(models.Model):
    STATUS_CHOICES = [
        ('Applied', 'Applied'),
        ('In Progress', 'In Progress'),
        ('Offer', 'Offer'),
        ('Rejected', 'Rejected'),
        ('Accepted', 'Accepted'),
        ('Withdrawn', 'Withdrawn'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='job_applications')
    company = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    date_applied = models.DateField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Applied')
    salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    job_url = models.URLField(max_length=200, null=True, blank=True)
    contact_person = models.CharField(max_length=255, null=True, blank=True)
    contact_number = models.CharField(max_length=20, null=True, blank=True)
    contact_email = models.EmailField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date_applied']

    def __str__(self):
        return f"{self.position} at {self.company}"

class Stage(models.Model):
    STAGE_TYPES = [
        ('Phone Call', 'Phone Call'),
        ('Assessment', 'Assessment'),
        ('HR Interview', 'HR Interview'),
        ('Remote Interview', 'Remote Interview'),
        ('Onsite Interview', 'Onsite Interview'),
        ('Technical Interview', 'Technical Interview'),
        ('Negotiation', 'Negotiation')
    ]

    STATUS_TYPES = [
        ('Scheduled', 'Scheduled'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled')
    ]

    job_application = models.ForeignKey(JobApplication, on_delete=models.CASCADE, related_name='stages')
    stage_number = models.PositiveIntegerField()
    stage_type = models.CharField(max_length=20, choices=STAGE_TYPES)
    date_time = models.DateTimeField()
    length = models.DurationField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_TYPES, default='Scheduled')

    class Meta:
        ordering = ['date_time']
        unique_together = ('job_application', 'stage_number')
    
    def save(self, *args, **kwargs):
        if not self.stage_number:
            last_stage = Stage.objects.filter(job_application=self.job_application).order_by('stage_number').last()
            self.stage_number = last_stage.stage_number + 1 if last_stage else 1
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"Stage {self.stage_number}: {self.stage_type} for {self.job_application.position} at {self.job_application.company}"

class Note(models.Model):
    job_application = models.ForeignKey(JobApplication, on_delete=models.CASCADE, related_name='notes')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Note for {self.job_application.position} at {self.job_application.company} on {self.created_at.strftime('%Y-%m-%d')}"

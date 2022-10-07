from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser, Student


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'username',]


class StudentAdmin(admin.ModelAdmin):
    model = Student
    list_display = ['user', 'dob', 'gender', 'year', 'course']


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Student, StudentAdmin)


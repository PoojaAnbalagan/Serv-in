from django.shortcuts import render
from .models import User
from rest_framework import  viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] #change to isAuthenticated later
    
    def get_permissions(self):
        """Allow anyone to register, but require authentication for other actions"""
        if self.action == 'create':
            return [AllowAny()]
        return [AllowAny()] #change to isAuthenticated later
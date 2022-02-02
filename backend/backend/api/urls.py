from api.views import views_cbv
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('authors/', views_cbv.AuthorListAPIView.as_view()),
    path('authors/<int:author_id>/', views_cbv.AuthorDetailAPIView.as_view()),

    path('genres/', views_cbv.CategoryListAPIView.as_view()),
    path('genres/<int:genre_id>/', views_cbv.CategoryDetailAPIView.as_view()),

    # path('books', views_w12.books_list),
    # path('books/<int:book_id>/', views_w12.book_detail),
    # path('books/<int:book_id>/books', views_w12.author_books),

]

from django.urls import path

from service import api

urlpatterns = [

    path("subscriber/add/", api.addSubscriber, name="add-subscriber"),
    path("contact/", api.getAllContacts, name="get-contacts"),
    path("contact/add/", api.addContact, name="add-contact"),

    path("search/", api.searchItems, name="search"),

    path("faq/", api.getFaq, name="faq"),
    path("faq/add/", api.addFaq, name="add-faq"),
    path("faq/update/", api.updateFaq, name="update-faq"),
    path("faq/delete/", api.deleteFaq, name="delete-faq"),

    path("images/remove/", api.removeImage, name="remove_image"),


    path("category/", api.categories, name="categories"),
    path("category/add/", api.addCategory, name="new_category"),
    path("category/update/", api.updateCategory, name="update_category"),
    path("category/delete/", api.deleteCategory, name="delete_category"),
 
    path("tag/", api.tags, name="tags"),
    path("tag/add/", api.addTag, name="new_tag"),
    path("tag/update/", api.updateTag, name="update_tag"),
    path("tag/delete/", api.deleteTag, name="delete_tag"),

    # ===================================================================
]
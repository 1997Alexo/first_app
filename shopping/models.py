from django.db import models

class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class CartItem:
    def __init__(self, product, quantity):
        self.product = product
        self.quantity = quantity

class ShoppingCart:
    def __init__(self):
        self.items = []

    def add_item(self, product, quantity=1):
        cart_item = self.find_item(product)
        if cart_item:
            cart_item.quantity += quantity
        else:
            self.items.append(CartItem(product, quantity))

    def remove_item(self, product, quantity=1):
        cart_item = self.find_item(product)
        if cart_item:
            cart_item.quantity -= quantity
            if cart_item.quantity <= 0:
                self.items.remove(cart_item)

    def find_item(self, product):
        for item in self.items:
            if item.product == product:
                return item
        return None

    def get_total_price(self):
        total = 0
        for item in self.items:
            total += item.product.price * item.quantity
        return total


class Ingredient < ApplicationRecord
  has_many :cocktails
  validates :name, uniqueness: true
end

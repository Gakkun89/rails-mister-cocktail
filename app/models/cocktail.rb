class Cocktail < ApplicationRecord
  has_many :ingredients
  validates :name, uniqueness: true
end

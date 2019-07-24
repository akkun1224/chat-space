class Message < ApplicationRecord
  belongs_to :group
  belongs_yo :user

  validates :content, presence: true, unless: :image?
end

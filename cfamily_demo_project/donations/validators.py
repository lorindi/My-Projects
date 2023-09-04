from django.core.validators import ValidationError


def image_size_validator_3mb(image_object):
    max_size = 3 * 1024 * 1024

    if image_object.size > max_size:
        return ValidationError('Image size can not be larger than 3MB')

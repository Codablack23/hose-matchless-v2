<?php

namespace App\Enums;

enum UserStatus: string
{
    case FACEBOOK = 'Facebook';
    case INSTAGRAM = 'Instagram';
    case TWITTER = 'Twitter';
    case TIKTOK = 'Tiktok';
    case YOUTUBE = 'Youtube';
    case LINKEDIN = 'Linkedin';
    case OTHER = 'Other';
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Alias;
use App\Models\Image;
use App\Models\Status;



class Person extends Model
{
    use HasFactory;

    public function aliases()
    {
        return $this->hasMany(Alias::class);
    }

    public function images()
    {
        return $this->hasOne(Image::class);
    }
    public function statuses()
    {
        return $this->hasMany(Status::class);
    }
}
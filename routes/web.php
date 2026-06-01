<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/conference', function () {
    return Inertia::render('Conference/Home');
})->name('conference.home');

Route::get('/conference/register', function () {
    return Inertia::render('Conference/Register');
})->name('conference.register');

Route::get('/conference/speakers/apply', function () {
    return Inertia::render('Conference/SpeakerApplication');
})->name('conference.speaker-application');

Route::get('/admin', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard/applications', function () {
    return Inertia::render('Applications');
})->middleware(['auth', 'verified'])->name('applications');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

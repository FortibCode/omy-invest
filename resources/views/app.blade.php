<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'OMYA INVEST') }}</title>

        <!-- Favicon OMYA INVEST : le « O » du logo en blanc sur bleu marine (lisible à 16 px) -->
        <link rel="icon" href="/favicon.ico?v=3" sizes="48x48" />
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png?v=3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

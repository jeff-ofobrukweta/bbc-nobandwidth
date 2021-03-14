/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

    workbox.routing.registerRoute(
        /\.(?:otf|ttf)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'font',
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 7 * 24 * 60 * 60
                })
            ]
        })
    );

    workbox.routing.registerRoute(
        /\.css$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'css',
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 5 * 24 * 60 * 60
                })
            ]
        })
    );

    workbox.routing.registerRoute(
        /\.(?:png|jpg|jpeg|svg|gif)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'image',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 20,
                    // Cache for a maximum of a week.
                    maxAgeSeconds: 7 * 24 * 60 * 60
                })
            ]
        })
    );

    workbox.routing.registerRoute(
        /\.js$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'js',
            plugins: [
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 3 * 24 * 60 * 60
                })
            ]
        })
    );
} else {
    console.log('Boo! Workbox didn\'t load 😬');
}
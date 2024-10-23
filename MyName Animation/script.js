// Animate name
anime({
    targets: '.letter',
    translateY: [-100, 0],
    scale: [0.5, 1],
    opacity: [0, 1],
    delay: anime.stagger(300),
    duration: 1200,
    easing: 'easeOutElastic(1, 0.5)',
});

// Animate Bible verse title and text
anime({
    targets: '.verse, .verse-text',
    opacity: [0, 1],
    translateY: [-50, 0],
    scale: [0.8, 1],
    delay: anime.stagger(1000),
    duration: 2000,
    easing: 'easeOutExpo',
});

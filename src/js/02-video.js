"use strict";

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time';

const savedTime = JSON.parse(localStorage.getItem(KEY));

player.setCurrentTime(savedTime || 0);

function updateTime(data) {
  setTime(data.seconds);
}

function setTime(time) {
  localStorage.setItem(KEY, JSON.stringify(time));
}

player.on('timeupdate', throttle(updateTime, 1000));
import {Sky} from 'three/examples/jsm/objects/Sky.js'
import * as THREE from 'three';

function buildSky() {
  const sky = new Sky();
  sky.scale.setScalar(10000)
  
  //scene.add(sky); add it outside
  return sky;
}
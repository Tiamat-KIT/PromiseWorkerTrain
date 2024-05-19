import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// シーンの設定
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.update();

// 頂点データを設定
const vertices = [
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(0, 1, 0)
];

// 頂点データを設定
const positionData = new Float32Array(vertices.flatMap(v => v.toArray()));
const positionAttribute = new THREE.BufferAttribute(positionData, 3);
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', positionAttribute);

// 材質の設定
const material = new THREE.PointsMaterial({ color: 0x00ff00 });

// メッシュの作成
const points = new THREE.Points(geometry, material);
scene.add(points);

// アニメーションの実装
export default function animate() {
    requestAnimationFrame(animate);

    // 頂点間の距離を計算し、線を描画するロジック
    const lines = [];
    for (let i = 0; i < vertices.length; i++) {
        for (let j = i + 1; j < vertices.length; j++) {
            // 始点と終点を表す Vector3 インスタンスの配列
            const linePoints = [vertices[i].clone(), vertices[j].clone()];
            
            // LINE_BASIC_MATERIAL を使用してラインを描画
            const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(linePoints), new THREE.LineBasicMaterial({ color: 0xffffff }));
            
            lines.push(line)
            // シーンにラインを追加
            scene.add(line);
        }
    }

    // アニメーションの進行に合わせて線を更新または削除
    // ここでは簡略化し、全ての線を再描画していますが、
    // 実際には特定の条件下でのみ更新を行うべきです。

    renderer.render(scene, camera);
}
// animate();

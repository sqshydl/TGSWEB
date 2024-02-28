# TGSWEB
KUMPULAN TUGAS PEMOGRAMAN WEB PUNYA TORA



const canvas document.querySelector("canvas");

Atur ukuran canvas yang digunaka

canvas.width = 608 Lebar canvas dalan pixel canvas.height 600; // Tings canvas dales pixel

const gl canvas.getContext("webgl"):

if (gl) {

12

throw new Error('Tidak Support WebGL');

II // Mennersihkan layar dengun warna hitam

14 gl.clearColor(0, 0, 0, 1)

15 gl.clear(gL.COLOR BUFFER BIT):

17. // Menbuat data titik untuk garis

18 const points (

-0.5, 0.0,// Titik awal

19

28

0.5, 0.0

21 11

23

23 // Membuat puffer antes mate pesisi titik garis

24 const positionBuffer gl.createBuffer();

25 gl.bindBuffer(gl.ARRAY BUFFER, positionBuffer);

20 gl.bufferData(gl.ARRAY BUFFER, new Float32Array(points), glL.STATIC DRAW):

21

211 // Hentuat vertex shader

const vertexShaderSource

attribute vec2 a position;

38

31

12

vaid main() {

34

35

36

gl Position = vec4(a_position, 0.0, 1.0); // Posisi titik

31 const vertexShader gl.createShaderigl.VERTEX SHADERI

01. shaderSource(vertexShader, vertexShaderSource):

10 gl.compileShader(vertexShader):

41 // Meubuat fragment shader

42. const fragnentShaderSource =

43

precision mediump float:

void main() {

46

gl FragColor = vec411.0, 0.0, 0.0, 1.0); // Warna merah

47

40

58 g1.shaderSource(fragmentShader, fragmentShaderSource);

const fragnentShader gl.createShader(gt.FRAGMENT SHADER);

51 52 gl.compileShader(fragmentShader);

51

54 Menbust preyran shader

55 const shaderProgram gl.createProgram();

38 gl.attachShader(shader Program, vertexShader):

57 gl.attachShader(shaderProgran, fragmentShader);

38 gl. LinkProgram(shaderProgram):

59 gl.useProgram(shaderProgram):

61 Mendapatkas Lokasi atribut posisi dari shader

62 const positionAttributeLocation gl.getAttribLocation(shaderProgram, a position'); 1 gl.enableVertexAttribArray[positionAttributeLocation);

45

gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

Menggambar garis 57 gl.drawArrays(g1.LINES, 0, 2);
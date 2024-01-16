# TGSWEB
KUMPULAN TUGAS PEMOGRAMAN WEB PUNYA TORA
-- Create mahasiswa table
CREATE TABLE mahasiswa (
    npm INT PRIMARY KEY,
    nama VARCHAR(255),
    jenkel CHAR(1),
    alamat VARCHAR(255)
);

-- Insert data into mahasiswa table
INSERT INTO mahasiswa (npm, nama, jenkel, alamat)
VALUES
    (12345, 'asep', 'l', 'bandung'),
    (12346, 'dadi', 'l', 'bandung'),
    (12347, 'dhino', 'l', 'bandung'),
    (12348, 'indri', 'p', 'bogor'),
    (12349, 'arni', 'p', 'bogor');

-- Create matakuliah table
CREATE TABLE matakuliah (
    kode_mk VARCHAR(5) PRIMARY KEY,
    nama_matkul VARCHAR(255),
    sks INT,
    semester INT
);

-- Insert data into matakuliah table
INSERT INTO matakuliah (kode_mk, nama_matkul, sks, semester)
VALUES
    ('mk343', 'java2', 3, 5),
    ('mk344', 'gis', 3, 7),
    ('mk345', 'database', 3, 3),
    ('mk346', 'ppa2', 3, 3),
    ('mk347', 'pti', 2, 1),
    ('mk348', 'web', 3, 5),
    ('mk349', 'java1', 3, 1);

-- Create kontrak_mk table
CREATE TABLE kontrak_mk (
    npm INT,
    kode_mk VARCHAR(5),
    nilai INT,
    PRIMARY KEY (npm, kode_mk),
    FOREIGN KEY (npm) REFERENCES mahasiswa(npm),
    FOREIGN KEY (kode_mk) REFERENCES matakuliah(kode_mk)
);

-- Insert data into kontrak_mk table
INSERT INTO kontrak_mk (npm, kode_mk, nilai)
VALUES
    (12345, 'mk349', 100),
    (12346, 'mk348', 90),
    (12347, 'mk347', 60),
    (12348, 'mk345', 100),
    (12349, 'mk346', 80),
    (12344, 'mk347', 70),
    (12343, 'mk347', 100),
    (12349, 'mk348', 80),
    (12344, 'mk344', 70);
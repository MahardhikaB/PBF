# Pertemuan 07 : Context

## **Praktikum 1: Membuat Variasi Ukuran Teks Heading dengan Context**

### **Langkah 1 : Buat project baru dan repo baru di GitHub**

![praktikum-img](images/P1_Langkah1.png)

### **Langkah 2: Buat struktur folder dengan prinsip atomic design**

![praktikum-img](images/P1_Langkah2.png)

### **Langkah 3: Buat komponen atom baru**

**Heading :**

![praktikum-img](images/P1_Langkah3.1.png)

**Section :**

![praktikum-img](images/P1_Langkah3.2.png)

**Main Page :**

![praktikum-img](images/P1_Langkah3.3.png)

### **Langkah 4: Ubah isi kode page.tsx dan run**

![praktikum-img](images/P1_Langkah4.png)

### **Soal 1**

![praktikum-img](images/P1_Soal1.png)

### **Langkah 5.1: Buat Context**

![praktikum-img](images/P1_Langkah5.1.png)

### **Langkah 5.2: Gunakan context**

![praktikum-img](images/P1_Langkah5.2.1.png)

![praktikum-img](images/P1_Langkah5.2.2.png)

### **Langkah 5.3: Sediakan context**

![praktikum-img](images/P1_Langkah5.3.png)

### **Soal 2**

![praktikum-img](images/P1_Soal2.png)

Terjadi error "Error: × You're importing a component that needs createContext. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default."

Cara untuk mengatasinya adalah memberi 'use client'; pada page.tsx

![praktikum-img](images/Soal2_Solve.png)

### **Langkah 6: Menggunakan dan menyediakan context dari komponen yang sama**

![praktikum-img](images/P1_Langkah6.1.png)

![praktikum-img](images/P1_Langkah6.2.png)

![praktikum-img](images/P1_Langkah6.3.png)

### **Soal 3**

![praktikum-img](images/P1_Soal3.png)

# JavaScript Property Descriptor
## Panduan Lengkap, Contoh Kode, Studi Kasus, dan Latihan

## 1. Apa Itu Property Descriptor?

**Property Descriptor** adalah konfigurasi yang mengatur bagaimana sebuah properti pada object JavaScript dapat dibaca, diubah, ditampilkan, atau dihapus.

Contoh object biasa:

```javascript
'use strict';

const person = {
    name: 'Viandry',
    age: 25,
    city: 'Jakarta'
};

person.name = 'Edward';
delete person.age;

console.log(person);
```

Secara default, properti yang dibuat melalui object literal memiliki tiga atribut berikut dengan nilai `true`:

- `writable`: nilai properti bisa diubah.
- `enumerable`: properti bisa muncul dalam iterasi seperti `for...in`.
- `configurable`: properti bisa dihapus atau descriptor-nya dapat diubah.

Untuk melihat konfigurasi properti, gunakan:

```javascript
console.log(
    Object.getOwnPropertyDescriptor(person, 'name')
);
```

Hasilnya:

```javascript
{
    value: 'Viandry',
    writable: true,
    enumerable: true,
    configurable: true
}
```

Perhatikan bahwa descriptor tersebut berlaku untuk properti `name`, bukan seluruh object `person`.

---

## 2. Empat Properti dalam Property Descriptor

### 2.1 `value`

Menentukan nilai yang disimpan oleh properti.

```javascript
const person = {
    name: 'Viandry'
};

Object.defineProperty(person, 'name', {
    value: 'Edward'
});

console.log(person.name); // Edward
```

**Penting:** ketika membuat atau mengonfigurasi properti menggunakan `Object.defineProperty()`, atribut descriptor yang tidak dicantumkan akan memiliki nilai default tertentu. Untuk descriptor data, `writable`, `enumerable`, dan `configurable` secara default adalah `false` jika properti baru dibuat.

Artinya, contoh di atas menghasilkan properti `name` dengan `writable: false`, `enumerable: false`, dan `configurable: false`.

### 2.2 `writable`

Mengatur apakah nilai properti bisa diubah.

```javascript
'use strict';

const person = {
    name: 'Viandry'
};

Object.defineProperty(person, 'name', {
    writable: false
});

person.name = 'Edward'; // TypeError
```

Karena menggunakan `'use strict'`, percobaan mengubah properti yang tidak writable akan menghasilkan `TypeError`.

Jika tidak menggunakan strict mode, penugasan tersebut biasanya diabaikan tanpa error.

### 2.3 `enumerable`

Mengatur apakah properti bisa muncul dalam iterasi tertentu.

```javascript
const person = {
    name: 'Viandry',
    age: 25
};

Object.defineProperty(person, 'age', {
    enumerable: false
});

console.log(Object.keys(person));
// ['name']

console.log(person.age);
// 25
```

Properti `age` tetap bisa diakses. Properti itu hanya tidak muncul pada operasi yang mengandalkan enumerabilitas, seperti `Object.keys()` dan iterasi `for...in`.

### 2.4 `configurable`

Mengatur apakah properti dapat dihapus atau descriptor-nya dapat diubah kembali.

```javascript
'use strict';

const person = {
    name: 'Viandry'
};

Object.defineProperty(person, 'name', {
    configurable: false
});

delete person.name; // TypeError
```

Ketika `configurable` diubah menjadi `false`, properti tidak bisa dihapus.

Selain itu, descriptor tidak bisa dikembalikan secara bebas ke konfigurasi sebelumnya. Contohnya, properti yang sudah `configurable: false` tidak dapat diubah kembali menjadi `configurable: true`.

Ada pengecualian terbatas untuk perubahan tertentu yang tetap kompatibel, misalnya mengubah `writable` dari `true` menjadi `false` pada properti data yang tidak configurable.

---

## 3. Mengenal `Object.defineProperty()`

Method ini digunakan untuk membuat atau mengatur descriptor dari satu properti.

Sintaks:

```javascript
Object.defineProperty(object, propertyName, descriptor);
```

Contoh konfigurasi lengkap:

```javascript
const person = {};

Object.defineProperty(person, 'name', {
    value: 'Edward',
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(person.name);
console.log(Object.keys(person));
console.log(
    Object.getOwnPropertyDescriptor(person, 'name')
);
```

Karena semua atribut diatur menjadi `true`, properti dapat diubah, ditampilkan dalam enumerasi, dan dihapus atau dikonfigurasi ulang.

### Mengapa descriptor default-nya berbeda?

Perhatikan perbandingan berikut.

Object literal:

```javascript
const obj = {
    name: 'Edward'
};

console.log(
    Object.getOwnPropertyDescriptor(obj, 'name')
);
```

Hasilnya:

```javascript
{
    value: 'Edward',
    writable: true,
    enumerable: true,
    configurable: true
}
```

Menggunakan `Object.defineProperty()`:

```javascript
const obj = {};

Object.defineProperty(obj, 'name', {
    value: 'Edward'
});

console.log(
    Object.getOwnPropertyDescriptor(obj, 'name')
);
```

Hasilnya:

```javascript
{
    value: 'Edward',
    writable: false,
    enumerable: false,
    configurable: false
}
```

**Kesimpulan:** atribut yang tidak ditentukan dalam descriptor `Object.defineProperty()` tidak otomatis mengikuti default object literal. Karena itu, tentukan semua atribut secara eksplisit jika kamu ingin perilaku tertentu.

---

## 4. Mengenal `Object.getOwnPropertyDescriptor()`

Method ini membaca descriptor dari satu properti milik langsung suatu object.

```javascript
const person = {
    name: 'Viandry',
    age: 25
};

const descriptor = Object.getOwnPropertyDescriptor(
    person,
    'name'
);

console.log(descriptor);
```

Method ini tidak mengubah object.

### Kesalahan pada coretan awal

Kode berikut tidak benar untuk mengatur `configurable`:

```javascript
Object.getOwnPropertyDescriptor(
    person,
    'name',
    { configurable: false }
);
```

Argumen ketiga tidak digunakan untuk mengubah descriptor. `Object.getOwnPropertyDescriptor()` hanya menerima object dan nama properti.

Gunakan `Object.defineProperty()` untuk mengubahnya:

```javascript
Object.defineProperty(person, 'name', {
    configurable: false
});

console.log(
    Object.getOwnPropertyDescriptor(person, 'name')
);
```

Dengan demikian, `configurable` menjadi `false`.

---

## 5. Mengenal `Object.defineProperties()`

Jika `Object.defineProperty()` mengatur satu properti, `Object.defineProperties()` mengatur beberapa properti sekaligus.

```javascript
const person = {};

Object.defineProperties(person, {
    name: {
        value: 'Viandry',
        writable: false,
        enumerable: true,
        configurable: false
    },

    age: {
        value: 25,
        writable: true,
        enumerable: true,
        configurable: true
    },

    city: {
        value: 'Jakarta',
        writable: true,
        enumerable: false,
        configurable: true
    }
});

console.log(person.name);
console.log(Object.keys(person));
// ['name', 'age']

console.log(person.city);
// Jakarta
```

Walaupun `city` tidak muncul di `Object.keys()`, nilainya tetap bisa dibaca.

Gunakan `Object.defineProperties()` ketika kamu perlu menetapkan aturan beberapa properti dalam satu langkah.

---

## 6. Memahami `Object.preventExtensions()`, `Object.seal()`, dan `Object.freeze()`

Ketiganya memiliki tujuan yang berhubungan, tetapi tingkat pembatasannya berbeda.

| Method | Tambah properti | Hapus properti | Ubah nilai properti yang writable |
|---|---|---|---|
| `Object.preventExtensions()` | Tidak | Bisa | Bisa |
| `Object.seal()` | Tidak | Tidak | Bisa |
| `Object.freeze()` | Tidak | Tidak | Tidak |

Ketiga method tersebut mengubah object yang diberikan dan mengembalikan object itu sendiri.

### 6.1 `Object.preventExtensions()`

Mencegah penambahan properti baru.

```javascript
'use strict';

const person = {
    name: 'Viandry'
};

Object.preventExtensions(person);

person.age = 25; // TypeError
person.name = 'Edward'; // Berhasil
delete person.name; // Berhasil
```

Method ini tidak otomatis membuat properti yang sudah ada menjadi non-writable atau non-configurable.

### 6.2 `Object.seal()`

Mencegah penambahan dan penghapusan properti, serta membuat properti yang ada menjadi non-configurable.

```javascript
'use strict';

const person = {
    name: 'Viandry',
    age: 25
};

Object.seal(person);

person.name = 'Edward'; // Berhasil
person.city = 'Jakarta'; // TypeError
delete person.age; // TypeError
```

Nilai `name` tetap bisa berubah karena `writable` masih `true`.

### 6.3 `Object.freeze()`

Mencegah penambahan properti, penghapusan properti, dan perubahan nilai properti data yang ada.

```javascript
'use strict';

const person = {
    name: 'Viandry',
    age: 25
};

Object.freeze(person);

person.name = 'Edward'; // TypeError
person.city = 'Jakarta'; // TypeError
delete person.age; // TypeError
```

Untuk melihat hasilnya:

```javascript
console.log(Object.isFrozen(person)); // true
console.log(Object.isSealed(person)); // true
console.log(Object.isExtensible(person)); // false
```

Object yang frozen juga sealed dan tidak extensible.

---

## 7. Bagaimana Cara Kerja `Object.freeze()` di Balik Layar?

Secara konsep, `Object.freeze()` menggabungkan dua tindakan utama:

1. Mencegah object menerima properti baru.
2. Membuat semua properti data yang ada menjadi tidak writable dan semua properti yang ada menjadi tidak configurable.

Gambaran implementasi konseptualnya:

```javascript
function myFreeze(obj) {
    const keys = Reflect.ownKeys(obj);

    for (const key of keys) {
        const descriptor =
            Object.getOwnPropertyDescriptor(obj, key);

        if (descriptor.configurable) {
            descriptor.configurable = false;
        }

        if ('value' in descriptor && descriptor.writable) {
            descriptor.writable = false;
        }

        Object.defineProperty(obj, key, descriptor);
    }

    Object.preventExtensions(obj);

    return obj;
}
```

Contoh:

```javascript
const menu = {
    DEPOSIT: 1,
    WITHDRAW: 2
};

myFreeze(menu);

console.log(Object.isFrozen(menu)); // true
```

Implementasi di atas menggambarkan prinsip dasar untuk object biasa. Ini bukan pengganti universal yang identik dengan implementasi native `Object.freeze()` untuk seluruh kasus JavaScript, termasuk object eksotis atau perilaku khusus `Proxy`.

Versi native tetap lebih disarankan:

```javascript
Object.freeze(menu);
```

### Bagaimana dengan `Object.seal()`?

Secara konsep, `Object.seal()`:

1. Membuat properti yang ada menjadi non-configurable.
2. Mencegah penambahan properti baru.

Contoh implementasi konseptual:

```javascript
function mySeal(obj) {
    const keys = Reflect.ownKeys(obj);

    for (const key of keys) {
        const descriptor =
            Object.getOwnPropertyDescriptor(obj, key);

        descriptor.configurable = false;

        Object.defineProperty(obj, key, descriptor);
    }

    Object.preventExtensions(obj);

    return obj;
}
```

Perbedaannya dengan `myFreeze()` adalah `mySeal()` tidak membuat properti data menjadi non-writable.

### Cara membandingkan hasilnya

```javascript
const obj = {
    name: 'Viandry'
};

Object.seal(obj);

console.log(
    Object.getOwnPropertyDescriptor(obj, 'name')
);
```

Hasil:

```javascript
{
    value: 'Viandry',
    writable: true,
    enumerable: true,
    configurable: false
}
```

Jika menggunakan `Object.freeze()`, hasilnya:

```javascript
{
    value: 'Viandry',
    writable: false,
    enumerable: true,
    configurable: false
}
```

---

## 8. Studi Kasus 1 — Membuat Enum Pattern

JavaScript tidak memiliki `enum` bawaan seperti TypeScript. Salah satu pendekatan adalah menggunakan object dengan konstanta bernama.

Contoh:

```javascript
const Menu = {
    CHECK_BALANCE: 0,
    DEPOSIT: 1,
    WITHDRAW: 2,
    EXIT: 3
};
```

Masalahnya, object ini masih bisa diubah:

```javascript
Menu.DEPOSIT = 100;
Menu.NEW_MENU = 4;
delete Menu.EXIT;
```

Jika kamu ingin semua nilai tetap, ada dua pendekatan.

### Pendekatan A: menggunakan `Object.freeze()`

```javascript
const Menu = {
    CHECK_BALANCE: 0,
    DEPOSIT: 1,
    WITHDRAW: 2,
    EXIT: 3
};

Object.freeze(Menu);
```

Ini cara yang paling ringkas.

### Pendekatan B: menggunakan `Object.defineProperty()`

Jika tujuan pembelajaranmu adalah memahami descriptor, kamu dapat membuat fungsi seperti ini:

```javascript
const Menu = {
    CHECK_BALANCE: 0,
    DEPOSIT: 1,
    WITHDRAW: 2,
    EXIT: 3
};

function freeze(obj) {
    for (const key of Reflect.ownKeys(obj)) {
        Object.defineProperty(obj, key, {
            writable: false,
            configurable: false
        });
    }

    Object.preventExtensions(obj);

    return obj;
}

freeze(Menu);
```

Di sini:

- `writable: false` mencegah perubahan nilai.
- `configurable: false` mencegah penghapusan atau konfigurasi ulang.
- `Object.preventExtensions()` mencegah penambahan properti baru.

Untuk object menu biasa, fungsi tersebut menghasilkan object yang frozen. Namun, jika ingin perilaku native yang lengkap untuk berbagai jenis object, gunakan `Object.freeze()`.

### Pengujian

```javascript
'use strict';

console.log(Menu.DEPOSIT); // 1

Menu.DEPOSIT = 10; // TypeError
Menu.NEW_MENU = 4; // TypeError
delete Menu.EXIT; // TypeError
```

### Mengapa enum pattern berguna?

Contohnya untuk menu aplikasi, status pesanan, dan HTTP status code.

```javascript
const OrderStatus = {
    PENDING: 'pending',
    PAID: 'paid',
    SHIPPED: 'shipped',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled'
};

Object.freeze(OrderStatus);
```

Dengan cara ini, kode dapat menggunakan `OrderStatus.PAID` daripada menulis string `'paid'` berulang kali.

Contoh HTTP status code:

```javascript
const HttpStatus = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

Object.freeze(HttpStatus);
```

Catatan: `Object.freeze()` tidak membuat object menjadi enum native. Ini hanya membantu menjaga properti object tetap stabil.

---

## 9. Studi Kasus 2 — Menyembunyikan Properti Internal

Misalnya, sebuah object memiliki data yang ingin tetap bisa diakses langsung, tetapi tidak ingin muncul saat object ditampilkan melalui `Object.keys()`.

```javascript
const user = {};

Object.defineProperties(user, {
    name: {
        value: 'Viandry',
        writable: true,
        enumerable: true,
        configurable: true
    },

    internalId: {
        value: 12345,
        writable: false,
        enumerable: false,
        configurable: false
    }
});

console.log(user.name); // Viandry
console.log(user.internalId); // 12345
console.log(Object.keys(user)); // ['name']
```

Perlu diingat, `enumerable: false` bukan fitur keamanan. Data tetap bisa diakses jika seseorang mengetahui nama propertinya.

---

## 10. Studi Kasus 3 — Getter dan Setter

Selain descriptor data, JavaScript juga mendukung **accessor descriptor**, yang menggunakan `get` dan `set`.

```javascript
const person = {
    firstName: 'Viandry',
    lastName: 'Prasiswandava'
};

Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },

    enumerable: true,
    configurable: true
});

console.log(person.fullName);
// Viandry Prasiswandava
```

Properti `fullName` tidak menyimpan nilai secara langsung. Ketika dibaca, fungsi `get` dijalankan.

Contoh setter:

```javascript
const account = {
    _balance: 1000
};

Object.defineProperty(account, 'balance', {
    get() {
        return this._balance;
    },

    set(value) {
        if (value < 0) {
            throw new Error('Saldo tidak boleh negatif');
        }

        this._balance = value;
    },

    enumerable: true,
    configurable: true
});

account.balance = 500;

console.log(account.balance); // 500
```

Jika nilai negatif diberikan, setter melempar error.

Perbedaan penting: descriptor data menggunakan `value` dan `writable`, sedangkan accessor descriptor menggunakan `get` dan `set`. Keduanya tidak boleh dicampur dalam descriptor yang sama.

---

## 11. Studi Kasus 4 — Apakah `Object.freeze()` Membekukan Nested Object?

Tidak sepenuhnya. `Object.freeze()` hanya membekukan object yang diberikan, bukan otomatis seluruh object di dalamnya.

```javascript
'use strict';

const user = {
    name: 'Viandry',
    address: {
        city: 'Jakarta'
    }
};

Object.freeze(user);

user.name = 'Edward'; // TypeError

user.address.city = 'Bogor'; // Berhasil

console.log(user.address.city); // Bogor
```

`user` frozen, tetapi `user.address` masih merupakan object terpisah yang belum dibekukan.

Untuk kebutuhan tertentu, kamu dapat menerapkan pembekuan rekursif.

```javascript
function deepFreeze(obj) {
    for (const key of Reflect.ownKeys(obj)) {
        const value = obj[key];

        if (
            value !== null &&
            typeof value === 'object' &&
            !Object.isFrozen(value)
        ) {
            deepFreeze(value);
        }
    }

    return Object.freeze(obj);
}
```

Contoh:

```javascript
const user = {
    name: 'Viandry',
    address: {
        city: 'Jakarta'
    }
};

deepFreeze(user);
```

Untuk object data sederhana, fungsi ini membantu membekukan object bersarang. Untuk object kompleks yang mengandung siklus referensi, accessor dengan efek samping, atau `Proxy`, implementasi deep freeze yang benar-benar tangguh membutuhkan penanganan tambahan.

---

## 12. Ringkasan Method Penting

| Method | Kegunaan |
|---|---|
| `Object.getOwnPropertyDescriptor()` | Membaca descriptor satu properti |
| `Object.getOwnPropertyDescriptors()` | Membaca descriptor seluruh properti milik langsung |
| `Object.defineProperty()` | Membuat atau mengubah descriptor satu properti |
| `Object.defineProperties()` | Membuat atau mengubah descriptor beberapa properti |
| `Object.preventExtensions()` | Mencegah penambahan properti |
| `Object.seal()` | Mencegah penambahan dan penghapusan properti |
| `Object.freeze()` | Mencegah penambahan, penghapusan, dan perubahan properti data |
| `Object.isExtensible()` | Memeriksa apakah object dapat ditambah propertinya |
| `Object.isSealed()` | Memeriksa apakah object sealed |
| `Object.isFrozen()` | Memeriksa apakah object frozen |

### Perbedaan yang harus diingat

- `writable` berhubungan dengan perubahan nilai properti data.
- `enumerable` berhubungan dengan visibilitas properti dalam operasi enumerasi tertentu.
- `configurable` berhubungan dengan penghapusan dan perubahan konfigurasi properti.
- `Object.preventExtensions()` berhubungan dengan penambahan properti baru.

---

## 13. Latihan Pemahaman

Cobalah jawab setiap pertanyaan sebelum melihat pembahasannya.

### Latihan 1 — Membaca descriptor

```javascript
const product = {
    name: 'Pupuk'
};

Object.defineProperty(product, 'price', {
    value: 50000
});

console.log(Object.keys(product));
console.log(product.price);
console.log(
    Object.getOwnPropertyDescriptor(product, 'price')
);
```

Pertanyaan:
1. Apakah `price` muncul dalam `Object.keys()`?
2. Berapa nilai `product.price`?
3. Apakah nilai `price` bisa diubah?

### Latihan 2 — Memahami `seal`

```javascript
'use strict';

const account = {
    balance: 1000
};

Object.seal(account);

account.balance = 2000;
account.owner = 'Viandry';
```

Pertanyaan:
1. Apakah perubahan `balance` berhasil?
2. Apakah penambahan `owner` berhasil?
3. Apa yang terjadi jika `delete account.balance` dijalankan?

### Latihan 3 — Memperbaiki kode

Perbaiki kode berikut agar seluruh properti menu tidak bisa diubah, dihapus, atau ditambah, tanpa menggunakan `Object.freeze()`.

```javascript
const Menu = {
    CHECK_BALANCE: 0,
    DEPOSIT: 1,
    WITHDRAW: 2,
    EXIT: 3
};

function freeze() {
    // Lengkapi di sini
}
```

### Pembahasan singkat

**Latihan 1**
1. `price` tidak muncul karena `enumerable` default-nya `false`.
2. Nilainya `50000`.
3. Tidak bisa diubah karena `writable` default-nya `false`.

**Latihan 2**
1. `balance` bisa diubah karena `writable` masih `true`.
2. Penambahan `owner` menghasilkan `TypeError` dalam strict mode.
3. Penghapusan `balance` menghasilkan `TypeError` dalam strict mode karena `configurable` sudah `false`.

**Latihan 3**

```javascript
function freeze() {
    for (const key of Reflect.ownKeys(Menu)) {
        Object.defineProperty(Menu, key, {
            writable: false,
            configurable: false
        });
    }

    Object.preventExtensions(Menu);
}

freeze();
```

Kode tersebut menerapkan prinsip dasar `Object.freeze()` untuk object menu biasa tanpa memanggil `Object.freeze()` secara langsung.

---

## 14. Kesimpulan

Property Descriptor memberi kontrol terhadap perilaku properti object JavaScript. Memahaminya membantu kamu mengetahui mengapa suatu properti bisa diubah, mengapa tidak muncul dalam iterasi, atau mengapa tidak bisa dihapus.

Urutan belajar yang disarankan:

1. Pahami `writable`, `enumerable`, dan `configurable`.
2. Praktikkan `Object.getOwnPropertyDescriptor()`.
3. Praktikkan `Object.defineProperty()` dan `Object.defineProperties()`.
4. Bandingkan `Object.preventExtensions()`, `Object.seal()`, dan `Object.freeze()`.
5. Terapkan pada enum pattern, konfigurasi aplikasi, dan getter/setter.
6. Pelajari keterbatasan shallow freeze dan konsep deep freeze.

**Prinsip utamanya:** jangan sekadar menghafal method. Pahami perubahan descriptor apa yang terjadi pada object setelah setiap method dijalankan.

function sipusApp() {
    return {
        // Auth
        isLoggedIn: false,
        currentUser: { name: '', role: '' },
        loginForm: { username: '', password: '' },
        
        // Navigation
        currentPage: 'dashboard',
        sidebarOpen: false,
        showModalBuku: false,
        
        // Search & Filter
        searchBuku: '',
        searchAnggota: '',
        filterKategori: '',
        filterPeminjaman: 'semua',
        
        // Data
        kategoris: [
            { id: 1, nama: 'Fiksi', icon: 'fas fa-book', color: 'bg-blue-100 text-blue-600', deskripsi: 'Novel, cerpen, puisi', jumlah: 324 },
            { id: 2, nama: 'Non-Fiksi', icon: 'fas fa-graduation-cap', color: 'bg-green-100 text-green-600', deskripsi: 'Ilmu pengetahuan, referensi', jumlah: 456 },
            { id: 3, nama: 'Komik', icon: 'fas fa-image', color: 'bg-purple-100 text-purple-600', deskripsi: 'Manga, komik, grafis', jumlah: 189 },
            { id: 4, nama: 'Anak', icon: 'fas fa-child', color: 'bg-yellow-100 text-yellow-600', deskripsi: 'Buku anak & edukasi', jumlah: 234 },
            { id: 5, nama: 'Teknologi', icon: 'fas fa-laptop', color: 'bg-red-100 text-red-600', deskripsi: 'IT, programming, sains', jumlah: 178 },
            { id: 6, nama: 'Sejarah', icon: 'fas fa-landmark', color: 'bg-orange-100 text-orange-600', deskripsi: 'Sejarah, biografi', jumlah: 156 }
        ],
        
        bukus: [
            { id: 1, judul: 'Laskar Pelangi', isbn: '978-979-22-1624-5', penulis: 'Andrea Hirata', kategori: 'Fiksi', stok: 12 },
            { id: 2, judul: 'Bumi', isbn: '978-602-03-0352-7', penulis: 'Tere Liye', kategori: 'Fiksi', stok: 8 },
            { id: 3, judul: 'Clean Code', isbn: '978-0-13-235088-4', penulis: 'Robert C. Martin', kategori: 'Teknologi', stok: 5 },
            { id: 4, judul: 'Sapiens', isbn: '978-0-06-231609-7', penulis: 'Yuval Noah Harari', kategori: 'Non-Fiksi', stok: 3 },
            { id: 5, judul: 'Naruto Vol. 1', isbn: '978-1-56-931900-8', penulis: 'Masashi Kishimoto', kategori: 'Komik', stok: 15 },
            { id: 6, judul: 'Si Kancil', isbn: '978-979-123-456-7', penulis: 'Cerita Rakyat', kategori: 'Anak', stok: 20 },
            { id: 7, judul: 'Atomic Habits', isbn: '978-0-73-521129-2', penulis: 'James Clear', kategori: 'Non-Fiksi', stok: 7 },
            { id: 8, judul: 'Bumi Manusia', isbn: '978-979-973-123-4', penulis: 'Pramoedya Ananta Toer', kategori: 'Fiksi', stok: 4 },
            { id: 9, judul: 'Pemrograman Web', isbn: '978-602-03-1234-5', penulis: 'Abdul Kadir', kategori: 'Teknologi', stok: 6 },
            { id: 10, judul: 'Laskar Pelangi', isbn: '978-979-22-1624-5', penulis: 'Andrea Hirata', kategori: 'Fiksi', stok: 0 }
        ],
        
        anggotas: [
            { id: 1, id_anggota: 'AGT-001', nama: 'Ahmad Fauzi', email: 'ahmad@email.com', telepon: '081234567890', status: 'Aktif' },
            { id: 2, id_anggota: 'AGT-002', nama: 'Siti Nurhaliza', email: 'siti@email.com', telepon: '081234567891', status: 'Aktif' },
            { id: 3, id_anggota: 'AGT-003', nama: 'Budi Santoso', email: 'budi@email.com', telepon: '081234567892', status: 'Aktif' },
            { id: 4, id_anggota: 'AGT-004', nama: 'Dewi Sartika', email: 'dewi@email.com', telepon: '081234567893', status: 'Nonaktif' },
            { id: 5, id_anggota: 'AGT-005', nama: 'Rizky Pratama', email: 'rizky@email.com', telepon: '081234567894', status: 'Aktif' },
            { id: 6, id_anggota: 'AGT-006', nama: 'Maya Angelina', email: 'maya@email.com', telepon: '081234567895', status: 'Aktif' }
        ],
        
        peminjamans: [
            { id: 1, anggota: 'Ahmad Fauzi', buku: 'Laskar Pelangi', tgl_pinjam: '2026-06-20', tgl_kembali: '2026-06-27', status: 'Dipinjam' },
            { id: 2, anggota: 'Siti Nurhaliza', buku: 'Clean Code', tgl_pinjam: '2026-06-15', tgl_kembali: '2026-06-22', status: 'Terlambat' },
            { id: 3, anggota: 'Budi Santoso', buku: 'Bumi', tgl_pinjam: '2026-06-18', tgl_kembali: '2026-06-25', status: 'Dipinjam' },
            { id: 4, anggota: 'Rizky Pratama', buku: 'Sapiens', tgl_pinjam: '2026-06-10', tgl_kembali: '2026-06-17', status: 'Dikembalikan' },
            { id: 5, anggota: 'Maya Angelina', buku: 'Atomic Habits', tgl_pinjam: '2026-06-19', tgl_kembali: '2026-06-26', status: 'Dipinjam' }
        ],
        
        recentActivities: [
            { id: 1, type: 'pinjam', message: 'Ahmad Fauzi meminjam "Laskar Pelangi"', time: '2 jam yang lalu' },
            { id: 2, type: 'kembali', message: 'Rizky Pratama mengembalikan "Sapiens"', time: '5 jam yang lalu' },
            { id: 3, type: 'pinjam', message: 'Maya Angelina meminjam "Atomic Habits"', time: '1 hari yang lalu' },
            { id: 4, type: 'terlambat', message: 'Siti Nurhaliza terlambat mengembalikan "Clean Code"', time: '2 hari yang lalu' },
            { id: 5, type: 'pinjam', message: 'Budi Santoso meminjam "Bumi"', time: '3 hari yang lalu' }
        ],
        
        // Computed
        get pageTitle() {
            const titles = {
                dashboard: 'Dashboard',
                buku: 'Manajemen Buku',
                anggota: 'Manajemen Anggota',
                peminjaman: 'Peminjaman & Pengembalian',
                kategori: 'Kategori Buku',
                laporan: 'Laporan',
                pengaturan: 'Pengaturan'
            };
            return titles[this.currentPage] || 'Dashboard';
        },
        
        get filteredBuku() {
            return this.bukus.filter(b => {
                const matchSearch = !this.searchBuku || 
                    b.judul.toLowerCase().includes(this.searchBuku.toLowerCase()) ||
                    b.penulis.toLowerCase().includes(this.searchBuku.toLowerCase());
                const matchKategori = !this.filterKategori || b.kategori === this.filterKategori;
                return matchSearch && matchKategori;
            });
        },
        
        get filteredAnggota() {
            return this.anggotas.filter(a => 
                !this.searchAnggota || 
                a.nama.toLowerCase().includes(this.searchAnggota.toLowerCase()) ||
                a.email.toLowerCase().includes(this.searchAnggota.toLowerCase())
            );
        },
        
        get filteredPeminjaman() {
            return this.peminjamans.filter(p => {
                if (this.filterPeminjaman === 'semua') return true;
                if (this.filterPeminjaman === 'aktif') return p.status === 'Dipinjam';
                if (this.filterPeminjaman === 'terlambat') return p.status === 'Terlambat';
                return true;
            });
        },
        
        // Methods
        login() {
            const users = {
                admin: { name: 'Administrator', role: 'Admin', password: 'password' },
                petugas: { name: 'Petugas Perpustakaan', role: 'Petugas', password: 'password' },
                anggota: { name: 'Ahmad Fauzi', role: 'Anggota', password: 'password' }
            };
            
            const user = users[this.loginForm.username];
            if (user && this.loginForm.password === user.password) {
                this.currentUser = { name: user.name, role: user.role };
                this.isLoggedIn = true;
                this.$nextTick(() => this.initCharts());
            } else {
                alert('Username atau password salah!');
            }
        },
        
        logout() {
            this.isLoggedIn = false;
            this.loginForm = { username: '', password: '' };
            this.currentPage = 'dashboard';
        },
        
        initCharts() {
            // Borrow Chart
            const borrowCtx = document.getElementById('borrowChart');
            if (borrowCtx) {
                new Chart(borrowCtx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
                        datasets: [{
                            label: 'Peminjaman',
                            data: [65, 78, 90, 81, 96, 115],
                            borderColor: '#0284c7',
                            backgroundColor: 'rgba(2, 132, 199, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: { legend: { display: false } }
                    }
                });
            }
            
            // Category Chart
            const catCtx = document.getElementById('categoryChart');
            if (catCtx) {
                new Chart(catCtx, {
                    type: 'doughnut',
                    data: {
                        labels: this.kategoris.map(k => k.nama),
                        datasets: [{
                            data: this.kategoris.map(k => k.jumlah),
                            backgroundColor: ['#3b82f6', '#22c55e', '#a855f7', '#eab308', '#ef4444', '#f97316']
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: { legend: { position: 'bottom' } }
                    }
                });
            }
        }
    };
}

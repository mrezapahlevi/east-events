export const FEATURED = [
  {
    name: "Pesta Pora 2024",
    location: "Jakarta",
    img: "./public/events/pestapora.jpeg",
  },
  {
    name: "Peksa 2024",
    location: "Semarang",
    img: "./public/events/peksa.jpeg",
  },
  {
    name: "Synchronize 2024",
    location: "JIExpo Jakarta",
    img: "./public/events/synchronize.jpg",
  },
];

import {
  FaMusic,
  FaTheaterMasks,
  FaFilm,
  FaLaugh,
  FaPaintBrush,
} from "react-icons/fa";
import {
  FaChalkboardTeacher,
  FaLaptop,
  FaGraduationCap,
  FaUniversity,
  FaMicrophone,
} from "react-icons/fa";
import {
  FaBuilding,
  FaRegHandshake,
  FaUserFriends,
  FaUsersCog,
  FaTrophy,
} from "react-icons/fa";
import {
  FaHeart,
  FaGlobe,
  FaPeopleCarry,
  FaHandsHelping,
  FaChurch,
} from "react-icons/fa";
import {
  FaFutbol,
  FaRunning,
  FaGamepad,
  FaDumbbell,
  FaBicycle,
} from "react-icons/fa";
import {
  FaPizzaSlice,
  FaUtensils,
  FaClipboardList,
  FaAppleAlt,
} from "react-icons/fa";
import {
  FaBabyCarriage,
  FaGhost,
  FaPuzzlePiece,
  FaPeopleArrows,
} from "react-icons/fa";
import { FaCalendarAlt, FaSun, FaSnowflake, FaFlag } from "react-icons/fa";
import {
  FaRocket,
  FaKeyboard,
  FaLightbulb,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";
import {
  FaSuitcase,
  FaMountain,
  FaMapMarkedAlt,
  FaPlane,
  FaPassport,
} from "react-icons/fa";
import { GiPumpkinLantern } from "react-icons/gi";
import { LuChefHat } from "react-icons/lu";

export const eventCategories = [
  { name: "Konser Musik", icon: FaMusic, color: "#FF6347" },
  { name: "Pertunjukan Teater", icon: FaTheaterMasks, color: "#FF4500" },
  { name: "Festival Film", icon: FaFilm, color: "#FFD700" },
  { name: "Stand-Up Comedy", icon: FaLaugh, color: "#32CD32" },
  { name: "Pameran Seni", icon: FaPaintBrush, color: "#8A2BE2" },
  {
    name: "Seminar & Workshop",
    icon: FaChalkboardTeacher,
    color: "#4682B4",
  },
  { name: "Webinar", icon: FaLaptop, color: "#1E90FF" },
  { name: "Kursus & Pelatihan", icon: FaGraduationCap, color: "#6A5ACD" },
  { name: "Konferensi Akademik", icon: FaUniversity, color: "#8B0000" },
  // { name: "Talkshow", icon: FaMicrophone, color: "#FF1493" },
  { name: "Konferensi Industri", icon: FaBuilding, color: "#2F4F4F" },
  { name: "Expo & Pameran Dagang", icon: FaRegHandshake, color: "#00BFFF" },
  // { name: "Networking Event", icon: FaUserFriends, color: "#FFD700" },
  { name: "Pelatihan Kepemimpinan", icon: FaUsersCog, color: "#32CD32" },
  // {
  //   name: "Penghargaan & Pengakuan Profesional",
  //   icon: FaTrophy,
  //   color: "#FFD700",
  // },
  { name: "Acara Amal", icon: FaHeart, color: "#FF6347" },
  { name: "Festival Budaya", icon: FaGlobe, color: "#A52A2A" },
  { name: "Pertemuan Komunitas", icon: FaPeopleCarry, color: "#20B2AA" },
  { name: "Kegiatan Relawan", icon: FaHandsHelping, color: "#FFD700" },
  { name: "Kegiatan Keagamaan", icon: FaChurch, color: "#8B4513" },
  { name: "Kompetisi Olahraga", icon: FaFutbol, color: "#228B22" },
  { name: "Maraton & Lari", icon: FaRunning, color: "#FF4500" },
  { name: "Turnamen Esports", icon: FaGamepad, color: "#800080" },
  { name: "Event Yoga & Fitness", icon: FaDumbbell, color: "#4682B4" },
  { name: "Perlombaan Sepeda", icon: FaBicycle, color: "#008080" },
  { name: "Festival Makanan", icon: FaPizzaSlice, color: "#FF6347" },
  { name: "Pasar Malam", icon: FaUtensils, color: "#FF8C00" },
  { name: "Kompetisi Memasak", icon: LuChefHat, color: "#8B0000" },
  // { name: "Workshop Kuliner", icon: FaClipboardList, color: "#2E8B57" },
  { name: "Pameran Produk Makanan", icon: FaAppleAlt, color: "#FF4500" },
  { name: "Festival Anak", icon: FaBabyCarriage, color: "#FF69B4" },
  { name: "Pesta Kostum", icon: FaGhost, color: "#A9A9A9" },
  // { name: "Workshop Kreativitas", icon: FaPaintBrush, color: "#8A2BE2" },
  { name: "Pameran Mainan", icon: FaPuzzlePiece, color: "#FFD700" },
  { name: "Acara Parenting", icon: FaPeopleArrows, color: "#32CD32" },
  { name: "Perayaan Tahun Baru", icon: FaCalendarAlt, color: "#00CED1" },
  // { name: "Festival Musim Panas", icon: FaSun, color: "#FF6347" },
  // { name: "Festival Musim Dingin", icon: FaSnowflake, color: "#ADD8E6" },
  // { name: "Acara Halloween", icon: GiPumpkinLantern, color: "#FF8C00" },
  { name: "Perayaan Hari Kemerdekaan", icon: FaFlag, color: "#B22222" },
  { name: "Peluncuran Produk Teknologi", icon: FaRocket, color: "#1E90FF" },
  { name: "Hackathon", icon: FaKeyboard, color: "#00BFFF" },
  { name: "Forum Inovasi Digital", icon: FaLightbulb, color: "#FFD700" },
  { name: "Acara Startup", icon: FaBriefcase, color: "#8B0000" },
  { name: "Workshop Pemrograman", icon: FaLaptopCode, color: "#00BFFF" },
  { name: "Tur Wisata", icon: FaSuitcase, color: "#2E8B57" },
  { name: "Festival Wisata Alam", icon: FaMountain, color: "#228B22" },
  {
    name: "Event Perjalanan Budaya",
    icon: FaMapMarkedAlt,
    color: "#D2691E",
  },
  // { name: "Peluncuran Destinasi Wisata", icon: FaPlane, color: "#00CED1" },
  { name: "Pameran Pariwisata", icon: FaPassport, color: "#FFD700" },
];

export const TRENDING = [
  {
    id: 1,
    name: "Main Hakim Sendiri",
    img: "1.jpeg",
  },
  {
    id: 2,
    name: "OK-JEK",
    img: "2.jpeg",
  },
  {
    id: 3,
    name: "86",
    img: "3.jpeg",
  },
  {
    id: 4,
    name: "Ini Talkshow",
    img: "4.jpeg",
  },
  {
    id: 5,
    name: "Tonight Show",
    img: "5.jpeg",
  },
  {
    id: 6,
    name: "Tetangga Masa Gitu",
    img: "6.jpeg",
  },
  {
    id: 7,
    name: "Mimpi Metropolitan",
    img: "7.jpeg",
  },
  {
    id: 8,
    name: "Comedy Night Live",
    img: "8.jpeg",
  },
  {
    id: 9,
    name: "Peristiwa",
    img: "9.jpeg",
  },
  {
    id: 10,
    name: "Lentera Indonesia",
    img: "10.jpeg",
  },
];

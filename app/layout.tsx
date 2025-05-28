import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Ridhwan Salahuddin - Software Developer Intern',
	description:
		'Welcome to my portfolio! I am a passionate developer who believes in Bridging strategy and software to solve everyday problems',
	keywords: [
		'Software Developer',
		'Web Developer',
		'Clean Code',
		'Simple Design',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'User Experience',
		'Problem Solving',
		'Effective Solutions',
		'Web Development',
		'Frontend Development',
		'Backend Development',
		'Ridhwan Salahuddin',
	],
	authors: [{ name: 'Ridhwan Salahuddin' }],
	creator: 'Ridhwan Salahuddin',
	openGraph: {
		title: 'Ridhwan Salahuddin - Software Developer Portfolio',
		description: 'passionate developer who believes in Bridging strategy and software to solve everyday problems. Explore my projects and development approach.',
		url: 'https://your-domain.com',
		siteName: 'Ridhwan Salahuddin - Developer Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Ridhwan Salahuddin - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ridhwan Salahuddin - Developer Portfolio',
		description: 'passionate developer who believes in Bridging strategy and software to solve everyday problems. Explore my projects and development approach.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}

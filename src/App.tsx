import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    AreaChart, Area, PieChart, Pie, Cell, LineChart, Line, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ZAxis
} from 'recharts';
import {
    LayoutDashboard, BarChart3, Settings, LogOut, Bell, Search,
    PieChart as PieIcon, TrendingUp, Target, Activity
} from 'lucide-react';
// The CSS import has been removed to fix the compilation error.
// import './App.css';

// --- MOCK DATA ---

// Card Data
interface CardData {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
}
const cardData: CardData[] = [
  { title: "Total Visitors", value: "1.2M", change: "+12.5% this month", icon: <TrendingUp className="icon" /> },
  { title: "Bounce Rate", value: "48.3%", change: "-2.1% this month", icon: <Activity className="icon" /> },
  { title: "Conversion Rate", value: "5.4%", change: "+0.8% this month", icon: <Target className="icon" /> },
  { title: "Avg. Session", value: "3m 45s", change: "+15s this month", icon: <PieIcon className="icon" /> },
];

// Chart Data
interface BarChartDataItem { name: string; revenue: number; }
const barChartData: BarChartDataItem[] = [
  { name: 'Jan', revenue: 4200 }, { name: 'Feb', revenue: 3100 }, { name: 'Mar', revenue: 5500 },
  { name: 'Apr', revenue: 4800 }, { name: 'May', revenue: 6200 }, { name: 'Jun', revenue: 5800 },
];
interface AreaChartDataItem { name: string; signups: number; }
const areaChartData: AreaChartDataItem[] = [
  { name: 'Week 1', signups: 120 }, { name: 'Week 2', signups: 180 }, { name: 'Week 3', signups: 150 },
  { name: 'Week 4', signups: 210 }, { name: 'Week 5', signups: 250 }, { name: 'Week 6', signups: 230 },
];
interface PieChartDataItem { name: string; value: number; }
const pieChartData: PieChartDataItem[] = [
  { name: 'Organic Search', value: 400 }, { name: 'Direct', value: 300 },
  { name: 'Referral', value: 300 }, { name: 'Social Media', value: 200 },
];
const PIE_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
interface LineChartDataItem { date: string; price: number; }
const lineChartData: LineChartDataItem[] = [
  { date: '2024-01', price: 100 }, { date: '2024-02', price: 110 }, { date: '2024-03', price: 105 },
  { date: '2024-04', price: 125 }, { date: '2024-05', price: 130 }, { date: '2024-06', price: 122 },
];
interface RadarChartDataItem { subject: string; A: number; B: number; fullMark: number; }
const radarChartData: RadarChartDataItem[] = [
  { subject: 'UI/UX', A: 120, B: 110, fullMark: 150 },
  { subject: 'Performance', A: 98, B: 130, fullMark: 150 },
  { subject: 'Features', A: 86, B: 130, fullMark: 150 },
  { subject: 'Support', A: 99, B: 100, fullMark: 150 },
  { subject: 'Pricing', A: 85, B: 90, fullMark: 150 },
];
interface ScatterChartDataItem { spend: number; revenue: number; }
const scatterChartData: ScatterChartDataItem[] = [
  { spend: 100, revenue: 200 }, { spend: 120, revenue: 190 }, { spend: 170, revenue: 280 },
  { spend: 140, revenue: 240 }, { spend: 150, revenue: 290 }, { spend: 110, revenue: 220 },
  { spend: 200, revenue: 350 }, { spend: 210, revenue: 380 }, { spend: 180, revenue: 310 },
];

// --- COMPONENTS ---

const StatsCard: React.FC<CardData> = ({ title, value, change, icon }) => (
  <div className="stats-card">
    <div className="stats-card-header">
      <h3 className="stats-card-title">{title}</h3>
      {icon}
    </div>
    <div className="stats-card-content">
      <div className="stats-card-value">{value}</div>
      <p className="stats-card-change">{change}</p>
    </div>
  </div>
);

const ChartCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="chart-card">
    <div className="chart-card-header">
      <div className="chart-card-title">{title}</div>
    </div>
    <div className="chart-card-content">
      <ResponsiveContainer width="100%" height={300}>
        {children}
      </ResponsiveContainer>
    </div>
  </div>
);

const Sidebar: React.FC = () => (
    <aside className="sidebar">
        <div className="sidebar-logo">Charts Demo</div>
        <nav className="sidebar-nav">
            <ul>
                {['Dashboard', 'Analytics', 'Reports', 'Settings'].map(item => (
                    <li key={item}>
                        <a href="#" className={`sidebar-link ${item === 'Dashboard' ? 'sidebar-link-active' : ''}`}>
                            {item === 'Dashboard' && <LayoutDashboard />}
                            {item === 'Analytics' && <BarChart3 />}
                            {item === 'Reports' && <PieIcon />}
                            {item === 'Settings' && <Settings />}
                            <span>{item}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="sidebar-logout">
            <a href="#" className="sidebar-link">
                <LogOut />
                <span>Logout</span>
            </a>
        </div>
    </aside>
);

const Header: React.FC = () => (
    <header className="header">
        <h1>Skills Showcase</h1>
        <div className="header-right">
            <div className="search-box">
                <Search className="search-icon" />
                <input type="text" placeholder="Search..." className="search-input" />
            </div>
            <button className="header-icon-btn"><Bell /></button>
            <div className="user-info">
                <div className="avatar">S</div>
                <div>
                    <p className="user-name">Showcase User</p>
                    <p className="user-email">demo@example.com</p>
                </div>
            </div>
        </div>
    </header>
);

const App: React.FC = () => {
    return (
        <>
            <style>
                {`
                /* General Styling */
                body {
                    font-family: 'Inter', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f3f4f6;
                    color: #1f2937;
                }

                .app {
                    display: flex;
                    min-height: 100vh;
                }

                /* Sidebar */
                .sidebar {
                    width: 256px;
                    background-color: #1f2937;
                    color: #f9fafb;
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;
                    position: fixed;
                    height: 100%;
                    z-index: 10;
                }

                .sidebar-logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    margin-bottom: 2.5rem;
                    padding-left: 0.5rem;
                    color: white;
                }

                .sidebar-nav ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    flex-grow: 1;
                }

                .sidebar-nav li {
                    margin-bottom: 0.5rem;
                }

                .sidebar-link {
                    display: flex;
                    align-items: center;
                    padding: 0.75rem;
                    border-radius: 0.5rem;
                    transition: background-color 0.2s, color 0.2s;
                    text-decoration: none;
                    color: #d1d5db;
                }

                .sidebar-link:hover {
                    background-color: #374151;
                }

                .sidebar-link-active {
                    background-color: #2563eb;
                    color: white;
                }

                .sidebar-link svg {
                    margin-right: 0.75rem;
                    width: 1.5rem;
                    height: 1.5rem;
                }

                .sidebar-logout {
                    margin-top: auto;
                    padding-top: 1rem;
                    border-top: 1px solid #4b5563;
                }

                .sidebar-logout .sidebar-link {
                    color: #f87171;
                }

                /* Header */
                .main-content-wrapper {
                    flex: 1;
                    margin-left: 256px;
                }

                .header {
                    background-color: #ffffff;
                    border-bottom: 1px solid #e5e7eb;
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    position: sticky;
                    top: 0;
                    z-index: 5;
                }

                .header h1 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin: 0;
                }

                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .search-box {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .search-input {
                    background-color: #f9fafb;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    padding: 0.5rem 1rem 0.5rem 2.5rem;
                    width: 16rem;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .search-input:focus {
                    outline: none;
                    border-color: #2563eb;
                    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.25);
                }

                .search-icon {
                    position: absolute;
                    left: 0.75rem;
                    color: #9ca3af;
                    width: 1.25rem;
                    height: 1.25rem;
                }

                .header-icon-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem;
                    border-radius: 9999px;
                    transition: background-color 0.2s;
                }

                .header-icon-btn:hover {
                    background-color: #f3f4f6;
                }

                .header-icon-btn svg {
                    width: 1.5rem;
                    height: 1.5rem;
                    color: #6b7280;
                }

                .user-info {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .avatar {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 9999px;
                    background-color: #3b82f6;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 1rem;
                }

                .user-name {
                    font-weight: 600;
                    font-size: 0.875rem;
                    color: #1f2937;
                    margin: 0;
                }

                .user-email {
                    font-size: 0.75rem;
                    color: #6b7280;
                    margin: 0;
                }

                /* Main Content and Grids */
                .main-content {
                    padding: 2rem;
                }

                .cards-grid {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .charts-grid {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 2rem;
                }

                /* Stats Card */
                .stats-card {
                    background-color: white;
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
                }

                .stats-card-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                }

                .stats-card-title {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #6b7280;
                    margin: 0;
                }

                .stats-card-content {

                }

                .stats-card-value {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #1f2937;
                    margin: 0;
                }

                .stats-card-change {
                    font-size: 0.75rem;
                    color: #6b7280;
                }

                .stats-card-header .icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    color: #6b7280;
                }


                /* Chart Cards */
                .chart-card {
                    background-color: white;
                    padding: 1.5rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
                }

                .chart-card-header {
                    margin-bottom: 1rem;
                }

                .chart-card-title {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #1f2937;
                }

                .chart-card-content {
                    height: 300px;
                }

                /* Responsive Design */
                @media (min-width: 640px) { /* sm breakpoint */
                    .cards-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 768px) { /* md breakpoint */
                    .cards-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }

                    .charts-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) { /* lg breakpoint */
                    .charts-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                `}
            </style>
            <div className="app">
                <Sidebar />
                <div className="main-content-wrapper">
                    <Header />
                    <main className="main-content">
                        {/* Top cards using the new StatsCard component */}
                        <div className="cards-grid">
                            {cardData.map((card, index) => <StatsCard key={index} {...card} />)}
                        </div>

                        {/* Charts grid, now wrapped in pure CSS cards */}
                        <div className="charts-grid">

                            <ChartCard title="Monthly Revenue">
                                <BarChart data={barChartData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" fontSize={12} />
                                    <YAxis fontSize={12} />
                                    <Tooltip cursor={{fill: 'rgba(239, 246, 255, 0.5)'}} />
                                    <Legend />
                                    <Bar dataKey="revenue" fill="#3B82F6" />
                                </BarChart>
                            </ChartCard>

                            <ChartCard title="User Signups">
                                <AreaChart data={areaChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" fontSize={12} />
                                    <YAxis fontSize={12} />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="signups" stroke="#10B981" fill="#D1FAE5" />
                                </AreaChart>
                            </ChartCard>

                            <ChartCard title="Traffic Sources">
                                <PieChart>
                                    <Pie data={pieChartData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value" label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}>
                                        {pieChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ChartCard>

                            <ChartCard title="Stock Price Trend">
                                <LineChart data={lineChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" fontSize={12} />
                                    <YAxis fontSize={12} domain={['dataMin - 10', 'dataMax + 10']} />
                                    <Tooltip
                                        cursor={{ strokeDasharray: '3 3' }}
                                        contentStyle={{
                                            backgroundColor: 'white',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '0.375rem',
                                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                                        }}
                                        labelStyle={{ fontWeight: 'bold', color: '#1f2937' }}
                                        itemStyle={{ color: '#EF4444' }}
                                        formatter={(value: number, name: string) => [`$${value.toFixed(2)}`, 'Price']}
                                    />
                                    <Legend />
                                    <Line type="monotone" dataKey="price" stroke="#EF4444" strokeWidth={2} activeDot={{ r: 8 }} />
                                </LineChart>
                            </ChartCard>

                            <ChartCard title="Feature Satisfaction (A vs B)">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" fontSize={12} />
                                    <PolarRadiusAxis angle={30} domain={[0, 150]} fontSize={10} />
                                    <Radar name="User Group A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                    <Radar name="User Group B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                                    <Tooltip />
                                    <Legend />
                                </RadarChart>
                            </ChartCard>

                            <ChartCard title="Ad Spend vs. Revenue">
                                <ScatterChart>
                                    <CartesianGrid />
                                    <XAxis type="number" dataKey="spend" name="Ad Spend" unit="$" fontSize={12} />
                                    <YAxis type="number" dataKey="revenue" name="Revenue" unit="$" fontSize={12} />
                                    <ZAxis range={[100]} />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <Legend />
                                    <Scatter name="Campaign Data" data={scatterChartData} fill="#F97316" />
                                </ScatterChart>
                            </ChartCard>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;

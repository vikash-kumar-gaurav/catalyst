import AllPageHero from '@/components/AllPageHeroSection';
import { fetchPageData } from '@/lib/useFetchData';
import { FaCalendarAlt, FaBookOpen, FaGraduationCap, FaHome, FaChalkboardTeacher } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { MdEventNote, MdDateRange } from 'react-icons/md';




const AcademicCalendarPage = async() => {

  let PageData = {
  "heroSection": {
    "imageUrl": "https://scontent.fdbd5-1.fna.fbcdn.net/v/t39.30808-6/486796764_1060363119452960_9116490955871950899_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WsdWZqEv6-gQ7kNvwGd3cxN&_nc_oc=AdnX43NpI7vXQ7KHKPTMdRsVgiOLg9iLAV2EMZoois1uRnL6-mOdRsXEiS9uu93Cmz92MB_mGTj7QurXzWwpx_Ip&_nc_zt=23&_nc_ht=scontent.fdbd5-1.fna&_nc_gid=1oHk8Cit_nDXN-4xQkLhPw&oh=00_AfSC-ZjPVv4NFQKuFJRtIc2mHXqCFFgrQ-lOK8ayWKc3ag&oe=6875A3BB",
    "tagline": "Acedmic - Calendar 2025 - 5028",
    "title": "Calendar"
  },
  "semesterDates": [
    {
      "title": "Fall Semester 2023",
      "dates": [
        "Orientation: August 15-18",
        "Classes Begin: August 21",
        "Classes End: December 8",
        "Final Exams: December 11-15"
      ],
      "image": "/images/fall-campus.jpg"
    },
    {
      "title": "Spring Semester 2024",
      "dates": [
        "Orientation: January 8-10",
        "Classes Begin: January 16",
        "Spring Break: March 11-15",
        "Classes End: May 3",
        "Final Exams: May 6-10"
      ],
      "image": "/images/spring-campus.jpg"
    },
    {
      "title": "Summer Sessions 2024",
      "dates": [
        "Session I: May 20 - June 28",
        "Session II: July 1 - August 9",
        "Intensive Courses: Various Dates"
      ],
      "image": "/images/summer-campus.jpg"
    }
  ],
  "registrationDeadlines": {
    "fall2023": [
      {
        "name": "Priority Registration",
        "date": "April 3-14"
      },
      {
        "name": "Open Registration",
        "date": "April 17 - August 18"
      },
      {
        "name": "Add/Drop Period",
        "date": "August 21-25"
      },
      {
        "name": "Withdrawal Deadline (Full Refund)",
        "date": "September 15"
      },
      {
        "name": "Withdrawal Deadline (Partial Refund)",
        "date": "October 20"
      }
    ],
    "spring2024": [
      {
        "name": "Priority Registration",
        "date": "November 6-17"
      },
      {
        "name": "Open Registration",
        "date": "November 20 - January 12"
      },
      {
        "name": "Add/Drop Period",
        "date": "January 16-20"
      },
      {
        "name": "Withdrawal Deadline (Full Refund)",
        "date": "February 10"
      },
      {
        "name": "Withdrawal Deadline (Partial Refund)",
        "date": "March 15"
      }
    ]
  },
  "holidays": [
    {
      "date": "September 4",
      "name": "Labor Day"
    },
    {
      "date": "October 9",
      "name": "Mahatma Gandhi Jayanti"
    },
    {
      "date": "November 23-24",
      "name": "Thanksgiving Break"
    },
    {
      "date": "December 16 - January 15",
      "name": "Winter Break"
    },
    {
      "date": "March 11-15",
      "name": "Spring Break"
    },
    {
      "date": "April 14",
      "name": "Bihar Diwas"
    },
    {
      "date": "May 1",
      "name": "May Day"
    }
  ],
  "examinationSchedule": {
    "fall2023": {
      "midterm": "October 16-20",
      "final": "December 11-15",
      "finalNote": "8:30 AM - 11:30 AM & 2:00 PM - 5:00 PM daily",
      "makeup": "January 8-10, 2024"
    },
    "spring2024": {
      "midterm": "March 18-22",
      "final": "May 6-10",
      "finalNote": "8:30 AM - 11:30 AM & 2:00 PM - 5:00 PM daily",
      "makeup": "May 20-22"
    }
  },
  "graduation": {
    "fall2023": {
      "date": "December 16, 2023",
      "deadline": "October 1, 2023"
    },
    "spring2024": {
      "date": "May 18, 2024",
      "deadline": "March 1, 2024"
    },
    "requirements": [
      "Minimum 120 credits completed",
      "2.5 cumulative GPA",
      "All financial obligations cleared"
    ]
  },
  "events": {
    "orientation": {
      "fall": "August 15-18, 2023",
      "spring": "January 8-10, 2024"
    },
    "housing": {
      "fall": "August 14, 2023",
      "spring": "January 7, 2024"
    },
    "conferences": [
      {
        "name": "Research Symposium",
        "date": "April 5-6, 2024"
      },
      {
        "name": "Career Fair",
        "dates": ["October 12, 2023", "March 8, 2024"]
      }
    ]
  }
}

const { data, error} = await fetchPageData("academic-calendar")
PageData = data as any ?? PageData;

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <AllPageHero 
        imageUrl={PageData.heroSection.imageUrl} 
        tagline={PageData.heroSection.tagline} 
        title={PageData.heroSection.title} 
      />

      {/* Main Calendar Content */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Semester Dates */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaCalendarAlt className="text-blue-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Semester Dates</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {PageData.semesterDates.map((semester, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={semester.image} alt={semester.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{semester.title}</h3>
                    <ul className="space-y-3">
                      {semester.dates.map((date, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration & Deadlines */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="flex items-center mb-8">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <MdEventNote className="text-purple-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Registration & Deadlines</h2>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Fall 2023 Registration</h3>
                  <ul className="space-y-3">
                    {PageData.registrationDeadlines.fall2023.map((item, index) => (
                      <li key={index} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="font-medium">{item.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Spring 2024 Registration</h3>
                  <ul className="space-y-3">
                    {PageData.registrationDeadlines.spring2024.map((item, index) => (
                      <li key={index} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="font-medium">{item.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Holidays & Breaks */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="flex items-center mb-8">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <MdDateRange className="text-yellow-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Holidays & Breaks</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">2023-2024 Academic Holidays</h3>
                  <div className="space-y-4">
                    {PageData.holidays.map((holiday, index) => (
                      <div key={index} className="flex items-center py-2 border-b border-gray-100 last:border-0">
                        <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                          {holiday.date}
                        </div>
                        <span className="text-gray-700">{holiday.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="h-full">
                  <img 
                    src="/images/campus-holiday.jpg" 
                    alt="Campus during holiday" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Examination Schedule */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="flex items-center mb-8">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <FaBookOpen className="text-red-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Examination Schedule</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Fall 2023 Examinations</h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="font-semibold text-gray-700 mb-2">Midterm Examinations</h4>
                      <p className="text-gray-600">{PageData.examinationSchedule.fall2023.midterm}</p>
                    </li>
                    <li>
                      <h4 className="font-semibold text-gray-700 mb-2">Final Examinations</h4>
                      <p className="text-gray-600">{PageData.examinationSchedule.fall2023.final}</p>
                      <p className="text-sm text-gray-500 mt-1">{PageData.examinationSchedule.fall2023.finalNote}</p>
                    </li>
                    <li>
                      <h4 className="font-semibold text-gray-700 mb-2">Make-up Exams</h4>
                      <p className="text-gray-600">{PageData.examinationSchedule.fall2023.makeup}</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 border-t md:border-t-0 md:border-l border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Spring 2024 Examinations</h3>
                  <ul className="space-y-4">
                    <li>
                      <h4 className="font-semibold text-gray-700 mb-2">Midterm Examinations</h4>
                      <p className="text-gray-600">{PageData.examinationSchedule.spring2024.midterm}</p>
                    </li>
                    <li>
                      <h4 className="font-semibold text-gray-700 mb-2">Final Examinations</h4>
                      <p className="text-gray-600">{PageData.examinationSchedule.spring2024.final}</p>
                      <p className="text-sm text-gray-500 mt-1">{PageData.examinationSchedule.spring2024.finalNote}</p>
                    </li>
                    <li>
                      <h4 className="font-semibold text-gray-700 mb-2">Make-up Exams</h4>
                      <p className="text-gray-600">{PageData.examinationSchedule.spring2024.makeup}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Graduation & Events */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaGraduationCap className="text-green-600 text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Graduation Dates</h2>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">Fall 2023 Commencement</h3>
                      <p className="text-gray-600">{PageData.graduation.fall2023.date}</p>
                      <p className="text-sm text-gray-500">Application Deadline: {PageData.graduation.fall2023.deadline}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">Spring 2024 Commencement</h3>
                      <p className="text-gray-600">{PageData.graduation.spring2024.date}</p>
                      <p className="text-sm text-gray-500">Application Deadline: {PageData.graduation.spring2024.deadline}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">Graduation Requirements</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {PageData.graduation.requirements.map((requirement, index) => (
                          <li key={index}>{requirement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <GiTeacher className="text-pink-600 text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Orientation & Events</h2>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">New Student Orientation</h3>
                      <p className="text-gray-600">Fall: {PageData.events.orientation.fall}</p>
                      <p className="text-gray-600">Spring: {PageData.events.orientation.spring}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">Housing Move-In Dates</h3>
                      <p className="text-gray-600">Fall Semester: {PageData.events.housing.fall}</p>
                      <p className="text-gray-600">Spring Semester: {PageData.events.housing.spring}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">Academic Conferences</h3>
                      <p className="text-gray-600">{PageData.events.conferences[0].name}: {PageData.events.conferences[0].date}</p>
                      <p className="text-gray-600">{PageData.events.conferences[1].name}: {PageData.events.conferences[1].date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Download Full Calendar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get the complete academic calendar with all dates and deadlines in PDF format
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all">
            Download PDF Calendar
          </button>
        </div>
      </section>
    </div>
  );
};

export default AcademicCalendarPage;
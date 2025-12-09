import { Clock, BookOpen } from "lucide-react"

const SubjectCard = ({subjectString, time}) => {
  const subject = subjectString ? subjectString : 'math';
  const subjectColors = {
    math: '#3b82f6',        // ярко-синий
    russian: '#ec4899',     // розовый
    CS: '#8b5cf6',          // фиолетовый
    GP: '#06b6d4',          // бирюзовый
    uzbek: '#f59e0b',       // оранжевый
    english: '#ef4444',     // красный
    history: '#d97706',     // темно-оранжевый/коричневый
    CbSc: '#10b981',        // зеленый
    geography: '#84cc16',   // лаймовый
    PE: '#14b8a6',          // teal
    assmbly: '#64748b',     // серый
    economics: '#eab308',   // желтый
  }

  const color = subjectColors[subject] || subjectColors.math

  return (
    <div className="p-6 w-full rounded-2xl bg-gray-900/80 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all border border-gray-700 relative overflow-hidden group hover:-translate-y-1">
      {/* Треугольник в углу */}
       <div 
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"
        style={{backgroundColor: color}}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div 
              className="w-1 h-6 rounded-full"
              style={{backgroundColor: color}}
            />
            <h2 className="text-lg font-bold text-white">{subject[0].toUpperCase() + subject.slice(1)}</h2>
          </div>
          <span 
            className="text-xs px-3 py-1 rounded-md font-medium"
            style={{
              backgroundColor: `${color}15`,
              color: color
            }}
          >
            ✓ Done
          </span>
        </div>

        <p className="flex gap-2 text-sm text-gray-400 mb-2">
          <Clock width='20px' hanging='20px'/> Starts at: <span className="font-medium text-gray-200">{time}</span>
        </p>

        <p className="flex gap-2 text-sm text-gray-300">
          <BookOpen width='24px' hanging='24px'/> Homework: Solve exercises 5–10 from page 34.
        </p>
      </div>
    </div>
  )
}
export default SubjectCard
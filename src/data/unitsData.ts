import { Unit } from '../types/math';

export const UNITS_DATA: Unit[] = [
  {
    id: 1,
    slug: 'algebraic-expressions',
    color: '#58cc02',
    bgColor: '#f0fdf4',
    accentColor: '#16a34a',
    titleEn: 'Unit 1: Algebraic Expressions & Polynomials',
    titleVi: 'Unit 1: Biểu thức Đại số & Đa thức',
    descEn: 'Variables, Coefficients, Polynomials, Factoring, Rational expressions',
    descVi: 'Biến số, Hệ số, Đa thức, Phân tích nhân tử & Hằng đẳng thức',
    topic: 'Algebra & Monomials',
    words: [
      {
        id: 'u1-w1',
        term: 'Variable',
        phonetic: '/ˈvɛəriəbəl/',
        meaning: 'Biến số',
        formula: 'x, y, z in f(x)',
        exampleEn: 'Solve for the variable x in the equation.',
        exampleVi: 'Giải tìm biến số x trong phương trình.',
        hint: 'Biến là đại lượng có thể nhận các giá trị khác nhau.'
      },
      {
        id: 'u1-w2',
        term: 'Constant',
        phonetic: '/ˈkɒnstənt/',
        meaning: 'Hằng số',
        formula: 'c in ax + c',
        exampleEn: 'The value 7 is a constant term.',
        exampleVi: 'Giá trị 7 là một số hạng hằng số.',
        hint: 'Hằng số có giá trị cố định không đổi.'
      },
      {
        id: 'u1-w3',
        term: 'Coefficient',
        phonetic: '/ˌkoʊɪˈfɪʃənt/',
        meaning: 'Hệ số',
        formula: 'a in ax²',
        exampleEn: 'In 5x³, 5 is the numerical coefficient.',
        exampleVi: 'Trong 5x³, 5 là hệ số số học.',
        hint: 'Số đứng trước biến trong một đơn thức.'
      },
      {
        id: 'u1-w4',
        term: 'Monomial',
        phonetic: '/mɒˈnoʊmiəl/',
        meaning: 'Đơn thức',
        formula: '3x²y',
        exampleEn: 'A monomial consists of a single term.',
        exampleVi: 'Một đơn thức chỉ bao gồm một số hạng duy nhất.',
        hint: 'Tích giữa các số và biến.'
      },
      {
        id: 'u1-w5',
        term: 'Polynomial',
        phonetic: '/ˌpɒlɪˈnoʊmiəl/',
        meaning: 'Đa thức',
        formula: 'P(x) = a_n x^n + ... + a_0',
        exampleEn: 'A polynomial is a sum of monomials.',
        exampleVi: 'Đa thức là tổng của các đơn thức.',
        hint: 'Nhiều đơn thức cộng lại với nhau.'
      },
      {
        id: 'u1-w6',
        term: 'Degree',
        phonetic: '/dɪˈɡriː/',
        meaning: 'Bậc (của đa thức)',
        formula: 'deg(P(x)) = max exponent',
        exampleEn: 'The degree of 4x³ + 2x - 1 is 3.',
        exampleVi: 'Bậc của đa thức 4x³ + 2x - 1 là 3.',
        hint: 'Số mũ cao nhất của biến trong đa thức thu gọn.'
      },
      {
        id: 'u1-w7',
        term: 'Numerator',
        phonetic: '/ˈnuːməreɪtər/',
        meaning: 'Tử số',
        formula: 'a in a/b',
        exampleEn: 'The numerator is the top number of a fraction.',
        exampleVi: 'Tử số là số ở phần trên của phân số.',
        hint: 'Phần nằm phía trên dấu gạch ngang phân số.'
      },
      {
        id: 'u1-w8',
        term: 'Denominator',
        phonetic: '/dɪˈnɒmɪneɪtər/',
        meaning: 'Mẫu số',
        formula: 'b in a/b (b ≠ 0)',
        exampleEn: 'The denominator cannot be equal to zero.',
        exampleVi: 'Mẫu số không bao giờ được bằng 0.',
        hint: 'Phần nằm dưới mẫu của phân số/phân thức.'
      },
      {
        id: 'u1-w9',
        term: 'Simplify',
        phonetic: '/ˈsɪmplɪfaɪ/',
        meaning: 'Rút gọn biểu thức',
        formula: 'Divide common factor',
        exampleEn: 'Simplify the rational expression to lowest terms.',
        exampleVi: 'Rút gọn phân thức về dạng tối giản.',
        hint: 'Chia cả tử và mẫu cho nhân tử chung.'
      },
      {
        id: 'u1-w10',
        term: 'Evaluate',
        phonetic: '/ɪˈvæljueɪt/',
        meaning: 'Tính giá trị biểu thức',
        formula: 'f(2) = 2² + 3',
        exampleEn: 'Evaluate the expression when x = 3.',
        exampleVi: 'Tính giá trị của biểu thức khi x = 3.',
        hint: 'Thay giá trị cụ thể của biến vào để tính ra số.'
      },
      {
        id: 'u1-w11',
        term: 'Factor',
        phonetic: '/ˈfæktər/',
        meaning: 'Nhân tử / Thừa số',
        formula: 'ab = a · b',
        exampleEn: 'Factor the polynomial completely: x² - 9 = (x - 3)(x + 3).',
        exampleVi: 'Phân tích đa thức thành nhân tử: x² - 9 = (x - 3)(x + 3).',
        hint: 'Tách biểu thức thành tích của các biểu thức nhỏ hơn.'
      },
      {
        id: 'u1-w12',
        term: 'Expand',
        phonetic: '/ɪkˈspænd/',
        meaning: 'Khai triển',
        formula: '(a + b)² = a² + 2ab + b²',
        exampleEn: 'Expand the product using the distributive property.',
        exampleVi: 'Khai triển tích bằng tính chất phân phối.',
        hint: 'Nhân phá ngoặc để tạo thành tổng các số hạng.'
      },
      {
        id: 'u1-w13',
        term: 'Identity',
        phonetic: '/aɪˈdɛntɪti/',
        meaning: 'Hằng đẳng thức đáng nhớ',
        formula: 'a² - b² = (a - b)(a + b)',
        exampleEn: 'Use the algebraic identity to compute quickly.',
        exampleVi: 'Sử dụng hằng đẳng thức đại số để tính nhanh.',
        hint: 'Đẳng thức luôn đúng với mọi giá trị của biến.'
      },
      {
        id: 'u1-w14',
        term: 'Common factor',
        phonetic: '/ˈkɒmən ˈfæktər/',
        meaning: 'Nhân tử chung',
        formula: 'ax + ay = a(x + y)',
        exampleEn: 'Factor out the greatest common factor first.',
        exampleVi: 'Đặt nhân tử chung lớn nhất ra ngoài trước.',
        hint: 'Thừa số xuất hiện ở tất cả các số hạng.'
      },
      {
        id: 'u1-w15',
        term: 'Rational expression',
        phonetic: '/ˈræʃənəl ɪkˈsprɛʃən/',
        meaning: 'Phân thức đại số',
        formula: 'P(x) / Q(x), Q(x) ≠ 0',
        exampleEn: 'A rational expression is a quotient of polynomials.',
        exampleVi: 'Phân thức đại số là thương của hai đa thức.',
        hint: 'Biểu thức có dạng thương A/B với B khác 0.'
      },
      {
        id: 'u1-w16',
        term: 'Like terms',
        phonetic: '/laɪk tɜːrmz/',
        meaning: 'Các đơn thức đồng dạng',
        formula: '3x²y and -5x²y',
        exampleEn: 'Combine like terms to simplify the equation.',
        exampleVi: 'Thu gọn các đơn thức đồng dạng để tối giản PT.',
        hint: 'Có cùng phần biến số và cùng số mũ.'
      },
      {
        id: 'u1-w17',
        term: 'Leading coefficient',
        phonetic: '/ˈliːdɪŋ ˌkoʊɪˈfɪʃənt/',
        meaning: 'Hệ số cao nhất',
        formula: 'a_n in a_n x^n',
        exampleEn: 'The leading coefficient determines the end behavior.',
        exampleVi: 'Hệ số cao nhất quyết định xu hướng hai đầu đồ thị.',
        hint: 'Hệ số của số hạng có bậc lớn nhất.'
      },
      {
        id: 'u1-w18',
        term: 'Distributive property',
        phonetic: '/dɪˈstrɪbjʊtɪv ˈprɒpərti/',
        meaning: 'Tính chất phân phối',
        formula: 'a(b + c) = ab + ac',
        exampleEn: 'Multiply each term using distributive property.',
        exampleVi: 'Nhân từng số hạng dựa theo tính chất phân phối.',
        hint: 'Phép nhân phân phối đối với phép cộng.'
      },
      {
        id: 'u1-w19',
        term: 'Square of a sum',
        phonetic: '/skwɛr əv ə sʌm/',
        meaning: 'Bình phương của một tổng',
        formula: '(a + b)² = a² + 2ab + b²',
        exampleEn: 'The square of a sum expands to three terms.',
        exampleVi: 'Bình phương một tổng khai triển thành 3 số hạng.',
        hint: 'Hằng đẳng thức số 1: (a+b)².'
      },
      {
        id: 'u1-w20',
        term: 'Difference of squares',
        phonetic: '/ˈdɪfrəns əv skwɛrz/',
        meaning: 'Hiệu hai bình phương',
        formula: 'a² - b² = (a - b)(a + b)',
        exampleEn: 'Factor x² - 25 as a difference of two squares.',
        exampleVi: 'Phân tích x² - 25 theo dạng hiệu hai bình phương.',
        hint: 'Hằng đẳng thức số 3: a² - b².'
      }
    ]
  },
  {
    id: 2,
    slug: 'linear-equations-systems',
    color: '#1cb0f6',
    bgColor: '#f0f9ff',
    accentColor: '#0284c7',
    titleEn: 'Unit 2: Linear Equations & Systems',
    titleVi: 'Unit 2: Phương trình & Hệ phương trình bậc nhất',
    descEn: 'Linear equations, Systems, Substitution, Elimination, Slope, Graph',
    descVi: 'Hệ phương trình bậc nhất hai ẩn, Phương pháp thế & cộng đại số',
    topic: 'Linear Systems & Coordinates',
    words: [
      {
        id: 'u2-w1',
        term: 'Linear equation',
        phonetic: '/ˈlɪniər ɪˈkweɪʒən/',
        meaning: 'Phương trình bậc nhất',
        formula: 'ax + b = 0',
        exampleEn: 'Solve the linear equation 2x + 6 = 0.',
        exampleVi: 'Giải phương trình bậc nhất 2x + 6 = 0.',
        hint: 'Phương trình có số mũ cao nhất của biến là 1.'
      },
      {
        id: 'u2-w2',
        term: 'System of equations',
        phonetic: '/ˈsɪstəm əv ɪˈkweɪʒənz/',
        meaning: 'Hệ phương trình',
        formula: '{ a₁x + b₁y = c₁; a₂x + b₂y = c₂ }',
        exampleEn: 'Find the solution (x, y) to this system of equations.',
        exampleVi: 'Tìm nghiệm (x, y) cho hệ phương trình này.',
        hint: 'Tập hợp gồm từ hai phương trình trở lên.'
      },
      {
        id: 'u2-w3',
        term: 'Substitution method',
        phonetic: '/ˌsʌbstɪˈtjuːʃən ˈmɛθəd/',
        meaning: 'Phương pháp thế',
        formula: 'Express x = ... then substitute',
        exampleEn: 'Isolate y from the first line and use the substitution method.',
        exampleVi: 'Rút y từ dòng thứ nhất và áp dụng phương pháp thế.',
        hint: 'Biểu diễn một ẩn theo ẩn kia rồi thế vào PT còn lại.'
      },
      {
        id: 'u2-w4',
        term: 'Elimination method',
        phonetic: '/ɪˌlɪmɪˈneɪʃən ˈmɛθəd/',
        meaning: 'Phương pháp cộng đại số',
        formula: 'Multiply & add/subtract equations',
        exampleEn: 'Use elimination method to cancel out variable y.',
        exampleVi: 'Dùng phương pháp cộng đại số để triệt tiêu biến y.',
        hint: 'Cộng hoặc trừ hai vế để làm mất đi một ẩn số.'
      },
      {
        id: 'u2-w5',
        term: 'Consistent system',
        phonetic: '/kənˈsɪstənt ˈsɪstəm/',
        meaning: 'Hệ có nghiệm',
        formula: 'Has at least 1 solution',
        exampleEn: 'A consistent system has either one or infinitely many solutions.',
        exampleVi: 'Một hệ có nghiệm sẽ có nghiệm duy nhất hoặc vô số nghiệm.',
        hint: 'Hai đường thẳng cắt nhau hoặc trùng nhau.'
      },
      {
        id: 'u2-w6',
        term: 'Inconsistent system',
        phonetic: '/ˌɪnkənˈsɪstənt ˈsɪstəm/',
        meaning: 'Hệ vô nghiệm',
        formula: 'Parallel lines (no common point)',
        exampleEn: 'The lines are parallel, so the system is inconsistent.',
        exampleVi: 'Hai đường thẳng song song, do đó hệ phương trình vô nghiệm.',
        hint: 'Không tìm thấy cặp giá trị nào thỏa mãn cả hai PT.'
      },
      {
        id: 'u2-w7',
        term: 'Dependent system',
        phonetic: '/dɪˈpɛndənt ˈsɪstəm/',
        meaning: 'Hệ có vô số nghiệm',
        formula: 'Coincident lines (d₁ ≡ d₂)',
        exampleEn: 'A dependent system has two coincident lines.',
        exampleVi: 'Hệ có vô số nghiệm khi hai đường thẳng trùng nhau.',
        hint: 'Các hệ số của hai phương trình tỉ lệ với nhau.'
      },
      {
        id: 'u2-w8',
        term: 'Slope',
        phonetic: '/sloʊp/',
        meaning: 'Hệ số góc',
        formula: 'm in y = mx + b, m = tan α',
        exampleEn: 'The slope measures the steepness and direction of the line.',
        exampleVi: 'Hệ số góc đo độ dốc và hướng của đường thẳng.',
        hint: 'Hệ số m trong hàm số y = mx + b.'
      },
      {
        id: 'u2-w9',
        term: 'Y-intercept',
        phonetic: '/waɪ ˈɪntərsɛpt/',
        meaning: 'Tung độ gốc',
        formula: '(0, b) on Oy axis',
        exampleEn: 'The line crosses the vertical axis at the y-intercept.',
        exampleVi: 'Đường thẳng cắt trục tung tại tung độ gốc.',
        hint: 'Tung độ của giao điểm đường thẳng với trục Oy.'
      },
      {
        id: 'u2-w10',
        term: 'X-intercept',
        phonetic: '/ɛks ˈɪntərsɛpt/',
        meaning: 'Hoành độ giao điểm Ox',
        formula: '(-b/a, 0)',
        exampleEn: 'Set y = 0 to determine the x-intercept.',
        exampleVi: 'Cho y = 0 để xác định hoành độ giao điểm với Ox.',
        hint: 'Giao điểm của đồ thị với trục hoành.'
      },
      {
        id: 'u2-w11',
        term: 'Parallel lines',
        phonetic: '/ˈpærəˌlɛl laɪnz/',
        meaning: 'Hai đường thẳng song song',
        formula: 'm₁ = m₂, b₁ ≠ b₂',
        exampleEn: 'Two lines are parallel if they have identical slopes.',
        exampleVi: 'Hai đường thẳng song song nếu chúng có cùng hệ số góc.',
        hint: 'Không bao giờ cắt nhau trên mặt phẳng tọa độ.'
      },
      {
        id: 'u2-w12',
        term: 'Perpendicular lines',
        phonetic: '/ˌpɜːrpənˈdɪkjələr laɪnz/',
        meaning: 'Hai đường thẳng vuông góc',
        formula: 'm₁ · m₂ = -1',
        exampleEn: 'Perpendicular lines intersect at a 90-degree angle.',
        exampleVi: 'Hai đường thẳng vuông góc cắt nhau tạo góc 90 độ.',
        hint: 'Tích hệ số góc của hai đường thẳng bằng -1.'
      },
      {
        id: 'u2-w13',
        term: 'Coordinates',
        phonetic: '/koʊˈɔːrdɪnɪts/',
        meaning: 'Tọa độ điểm',
        formula: '(x, y)',
        exampleEn: 'Plot the coordinates (3, -2) on the Cartesian plane.',
        exampleVi: 'Vẽ điểm có tọa độ (3, -2) trên mặt phẳng tọa độ.',
        hint: 'Cặp giá trị (hoành độ, tung độ).'
      },
      {
        id: 'u2-w14',
        term: 'Origin',
        phonetic: '/ˈɔːrɪdʒɪn/',
        meaning: 'Gốc tọa độ',
        formula: 'O(0, 0)',
        exampleEn: 'The x-axis and y-axis intersect at the origin.',
        exampleVi: 'Trục x và trục y cắt nhau tại gốc tọa độ O.',
        hint: 'Điểm chuẩn O có tọa độ (0, 0).'
      },
      {
        id: 'u2-w15',
        term: 'Intersection',
        phonetic: '/ˌɪntərˈsɛkʃən/',
        meaning: 'Giao điểm',
        formula: 'Point of intersection',
        exampleEn: 'The point of intersection represents the unique solution.',
        exampleVi: 'Giao điểm biểu thị nghiệm duy nhất của hệ phương trình.',
        hint: 'Điểm chung giữa hai đồ thị.'
      },
      {
        id: 'u2-w16',
        term: 'Parameter',
        phonetic: '/pəˈræmɪtər/',
        meaning: 'Tham số',
        formula: 'm in y = (m-1)x + 2',
        exampleEn: 'Find the value of parameter m so the two lines coincide.',
        exampleVi: 'Tìm giá trị tham số m để hai đường thẳng trùng nhau.',
        hint: 'Hằng số có thể thay đổi để khảo sát bài toán.'
      },
      {
        id: 'u2-w17',
        term: 'Equivalent equations',
        phonetic: '/ɪˈkwɪvələnt ɪˈkweɪʒənz/',
        meaning: 'Phương trình tương đương',
        formula: 'A ⇔ B (same solution set)',
        exampleEn: 'Equivalent equations share the exact same solution set.',
        exampleVi: 'Hai phương trình tương đương có cùng tập hợp nghiệm.',
        hint: 'Có cùng tập nghiệm S.'
      },
      {
        id: 'u2-w18',
        term: 'Domain condition',
        phonetic: '/doʊˈmeɪn kənˈdɪʃən/',
        meaning: 'Điều kiện xác định (ĐKXĐ)',
        formula: 'Denominator ≠ 0',
        exampleEn: 'Always check the domain condition before solving.',
        exampleVi: 'Luôn tìm điều kiện xác định trước khi giải phương trình.',
        hint: 'Điều kiện để các biểu thức trong PT có nghĩa.'
      },
      {
        id: 'u2-w19',
        term: 'Word problem',
        phonetic: '/wɜːrd ˈprɒbləm/',
        meaning: 'Bài toán thực tế / Toán đố',
        formula: 'Speed = Distance / Time',
        exampleEn: 'Translate the word problem into a system of equations.',
        exampleVi: 'Chuyển bài toán thực tế thành hệ phương trình để giải.',
        hint: 'Bài toán lập phương trình hoặc hệ phương trình.'
      },
      {
        id: 'u2-w20',
        term: 'Cartesian plane',
        phonetic: '/kɑːrˈtiːziən pleɪn/',
        meaning: 'Mặt phẳng tọa độ Oxy',
        formula: 'x-axis ⊥ y-axis',
        exampleEn: 'Graph both linear functions on the Cartesian plane.',
        exampleVi: 'Vẽ đồ thị cả hai hàm số bậc nhất trên mặt phẳng Oxy.',
        hint: 'Hệ trục tọa độ gồm hai trục vuông góc nhau.'
      }
    ]
  },
  {
    id: 3,
    slug: 'inequalities-radicals',
    color: '#ff9600',
    bgColor: '#fffbeb',
    accentColor: '#d97706',
    titleEn: 'Unit 3: Inequalities & Radicals',
    titleVi: 'Unit 3: Bất đẳng thức & Biến đổi Căn thức',
    descEn: 'Inequalities, Radicand, Square roots, Rationalize denominator',
    descVi: 'Bất phương trình, Căn thức bậc hai, Trục căn thức ở mẫu',
    topic: 'Radicals & Inequalities',
    words: [
      {
        id: 'u3-w1',
        term: 'Inequality',
        phonetic: '/ˌɪnɪˈkwɒlɪti/',
        meaning: 'Bất phương trình / Bất đẳng thức',
        formula: 'ax + b > 0, ≥, <, ≤',
        exampleEn: 'Reverse the inequality sign when multiplying by a negative.',
        exampleVi: 'Đổi chiều dấu bất đẳng thức khi nhân với một số âm.',
        hint: 'Biểu thức so sánh hai vế bằng các dấu >, <, ≥, ≤.'
      },
      {
        id: 'u3-w2',
        term: 'Strict inequality',
        phonetic: '/strɪkt ˌɪnɪˈkwɒlɪti/',
        meaning: 'Bất đẳng thức ngặt',
        formula: '> or < (not equal)',
        exampleEn: 'A strict inequality does not include the boundary point.',
        exampleVi: 'Bất đẳng thức ngặt không lấy điểm mút biên.',
        hint: 'Chỉ chứa dấu lớn hơn (>) hoặc nhỏ hơn (<).'
      },
      {
        id: 'u3-w3',
        term: 'Interval',
        phonetic: '/ˈɪntərvəl/',
        meaning: 'Khoảng / Đoạn',
        formula: '(a, b) or [a, b]',
        exampleEn: 'The solution is written in interval notation as [2, +∞).',
        exampleVi: 'Nghiệm được viết dưới dạng nửa khoảng [2, +∞).',
        hint: 'Tập hợp các số thực nằm giữa hai giới hạn.'
      },
      {
        id: 'u3-w4',
        term: 'Number line',
        phonetic: '/ˈnʌmbər laɪn/',
        meaning: 'Trục số',
        formula: 'Real line (-∞, +∞)',
        exampleEn: 'Represent the solution set on a horizontal number line.',
        exampleVi: 'Biểu diễn tập nghiệm trên trục số nằm ngang.',
        hint: 'Đường thẳng biểu diễn trực quan các số thực.'
      },
      {
        id: 'u3-w5',
        term: 'Radical sign',
        phonetic: '/ˈrædɪkəl saɪn/',
        meaning: 'Dấu căn thức',
        formula: '√ symbol',
        exampleEn: 'The radical sign denotes a square root.',
        exampleVi: 'Dấu căn thức biểu thị căn bậc hai.',
        hint: 'Ký hiệu căn bậc hai (√).'
      },
      {
        id: 'u3-w6',
        term: 'Radicand',
        phonetic: '/ˈrædɪkænd/',
        meaning: 'Biểu thức dưới dấu căn',
        formula: 'A in √A',
        exampleEn: 'For √A to exist, the radicand A must be non-negative.',
        exampleVi: 'Để √A có nghĩa, biểu thức dưới căn A phải không âm.',
        hint: 'Số hoặc biểu thức nằm bên trong dấu căn.'
      },
      {
        id: 'u3-w7',
        term: 'Square root',
        phonetic: '/skwɛr ruːt/',
        meaning: 'Căn bậc hai',
        formula: '√x = y ⇔ y ≥ 0 and y² = x',
        exampleEn: 'The principal square root of 49 is 7.',
        exampleVi: 'Căn bậc hai số học của 49 là 7.',
        hint: 'Giá trị không âm mà bình phương lên bằng x.'
      },
      {
        id: 'u3-w8',
        term: 'Rationalize denominator',
        phonetic: '/ˈræʃənəlaɪz dɪˈnɒmɪneɪtər/',
        meaning: 'Trục căn thức ở mẫu',
        formula: 'Multiply conjugate: a / √b = a√b / b',
        exampleEn: 'Rationalize the denominator by multiplying by the conjugate.',
        exampleVi: 'Trục căn thức ở mẫu bằng cách nhân với biểu thức liên hợp.',
        hint: 'Biến đổi để mẫu không còn chứa dấu căn thức.'
      },
      {
        id: 'u3-w9',
        term: 'Conjugate',
        phonetic: '/ˈkɒndʒʊɡət/',
        meaning: 'Biểu thức liên hợp',
        formula: '(√a - √b) and (√a + √b)',
        exampleEn: 'The conjugate of (3 - √2) is (3 + √2).',
        exampleVi: 'Biểu thức liên hợp của (3 - √2) là (3 + √2).',
        hint: 'Đổi dấu phép tính ở giữa hai số hạng để tạo hiệu hai bình phương.'
      },
      {
        id: 'u3-w10',
        term: 'Extract root',
        phonetic: '/ɪkˈstrækt ruːt/',
        meaning: 'Đưa thừa số ra ngoài dấu căn',
        formula: '√(a²b) = |a|√b',
        exampleEn: 'Extract the root factor: √75 = 5√3.',
        exampleVi: 'Đưa thừa số ra ngoài dấu căn: √75 = 5√3.',
        hint: 'Tách nhân tử chính phương để đưa ra ngoài căn.'
      },
      {
        id: 'u3-w11',
        term: 'Insert root',
        phonetic: '/ɪnˈsɜːrt ruːt/',
        meaning: 'Đưa thừa số vào trong dấu căn',
        formula: 'a√b = √(a²b) for a ≥ 0',
        exampleEn: 'Insert the number into the radical to compare values.',
        exampleVi: 'Đưa số vào trong dấu căn để so sánh giá trị.',
        hint: 'Bình phương số dương rồi nhân vào bên trong căn.'
      },
      {
        id: 'u3-w12',
        term: 'Extraneous root',
        phonetic: '/ɪkˈstreɪniəs ruːt/',
        meaning: 'Nghiệm ngoại lai',
        formula: 'Invalid root introduced by squaring',
        exampleEn: 'Squaring both sides can introduce an extraneous root.',
        exampleVi: 'Bình phương hai vế có thể sinh ra nghiệm ngoại lai vô nghiệm.',
        hint: 'Nghiệm tìm được nhưng không thỏa mãn phương trình ban đầu.'
      },
      {
        id: 'u3-w13',
        term: 'At least',
        phonetic: '/æt liːst/',
        meaning: 'Ít nhất / Không nhỏ hơn',
        formula: 'x ≥ a',
        exampleEn: 'The student must score at least 80 percent.',
        exampleVi: 'Học sinh phải đạt ít nhất 80 phần trăm.',
        hint: 'Tương ứng với dấu lớn hơn hoặc bằng (≥).'
      },
      {
        id: 'u3-w14',
        term: 'At most',
        phonetic: '/æt moʊst/',
        meaning: 'Nhiều nhất / Không vượt quá',
        formula: 'x ≤ b',
        exampleEn: 'The total cost is at most 100 dollars.',
        exampleVi: 'Tổng chi phí nhiều nhất là 100 đô la.',
        hint: 'Tương ứng với dấu nhỏ hơn hoặc bằng (≤).'
      },
      {
        id: 'u3-w15',
        term: 'Non-negative',
        phonetic: '/nɒn ˈnɛɡətɪv/',
        meaning: 'Không âm',
        formula: 'x ≥ 0',
        exampleEn: 'Absolute values are always non-negative.',
        exampleVi: 'Giá trị tuyệt đối luôn luôn không âm.',
        hint: 'Lớn hơn hoặc bằng 0 (bao gồm cả số 0).'
      },
      {
        id: 'u3-w16',
        term: 'Absolute value',
        phonetic: '/ˈæbsəluːt ˈvæljuː/',
        meaning: 'Giá trị tuyệt đối',
        formula: '|x| = √(x²)',
        exampleEn: 'The property √(A²) equals the absolute value of A.',
        exampleVi: 'Tính chất √(A²) bằng giá trị tuyệt đối của A: |A|.',
        hint: 'Khoảng cách từ điểm x đến gốc tọa độ 0.'
      },
      {
        id: 'u3-w17',
        term: 'AM-GM Inequality',
        phonetic: '/eɪ-ɛm dʒiː-ɛm ˌɪnɪˈkwɒlɪti/',
        meaning: 'Bất đẳng thức Cauchy (AM-GM)',
        formula: '(a + b)/2 ≥ √(ab) for a, b ≥ 0',
        exampleEn: 'Use the AM-GM inequality to find the minimum sum.',
        exampleVi: 'Áp dụng BĐT AM-GM (Cauchy) để tìm GTNN của tổng.',
        hint: 'Trung bình cộng lớn hơn hoặc bằng trung bình nhân.'
      },
      {
        id: 'u3-w18',
        term: 'Bounded',
        phonetic: '/ˈbaʊndɪd/',
        meaning: 'Bị chặn',
        formula: 'm ≤ f(x) ≤ M',
        exampleEn: 'The trigonometric function sine is bounded between -1 and 1.',
        exampleVi: 'Hàm số sin bị chặn trong đoạn từ -1 đến 1.',
        hint: 'Có chặn trên và chặn dưới.'
      },
      {
        id: 'u3-w19',
        term: 'Equivalent inequality',
        phonetic: '/ɪˈkwɪvələnt ˌɪnɪˈkwɒlɪti/',
        meaning: 'Bất phương trình tương đương',
        formula: 'Same solution set on ℝ',
        exampleEn: 'Adding the same number yields an equivalent inequality.',
        exampleVi: 'Cộng cùng một số vào hai vế cho ta BPT tương đương.',
        hint: 'Hai BPT có cùng tập nghiệm.'
      },
      {
        id: 'u3-w20',
        term: 'Simplify radical',
        phonetic: '/ˈsɪmplɪfaɪ ˈrædɪkəl/',
        meaning: 'Rút gọn biểu thức chứa căn',
        formula: 'Combine like radical terms',
        exampleEn: 'Simplify the radical by factoring out perfect squares.',
        exampleVi: 'Rút gọn căn thức bằng cách tách các số chính phương.',
        hint: 'Thu gọn các căn thức đồng dạng.'
      }
    ]
  },
  {
    id: 4,
    slug: 'quadratic-functions-viete',
    color: '#a855f7',
    bgColor: '#faf5ff',
    accentColor: '#9333ea',
    titleEn: 'Unit 4: Quadratic Functions & Viète\'s Theorem',
    titleVi: 'Unit 4: Hàm số y = ax² & Định lý Viète',
    descEn: 'Parabola, Vertex, Discriminant, Viète\'s formulas, Quadratic roots',
    descVi: 'Đồ thị Parabol, Tọa độ Đỉnh, Biệt thức Delta và Định lý Viète',
    topic: 'Quadratic & Viète',
    words: [
      {
        id: 'u4-w1',
        term: 'Quadratic equation',
        phonetic: '/kwɒˈdrætɪk ɪˈkweɪʒən/',
        meaning: 'Phương trình bậc hai',
        formula: 'ax² + bx + c = 0 (a ≠ 0)',
        exampleEn: 'Solve the quadratic equation x² - 5x + 6 = 0.',
        exampleVi: 'Giải phương trình bậc hai x² - 5x + 6 = 0.',
        hint: 'Phương trình có số mũ cao nhất của ẩn là 2.'
      },
      {
        id: 'u4-w2',
        term: 'Parabola',
        phonetic: '/pəˈræbələ/',
        meaning: 'Đường cong Parabol',
        formula: 'y = ax² (a ≠ 0)',
        exampleEn: 'The graph of a quadratic function is a symmetric parabola.',
        exampleVi: 'Đồ thị của hàm số bậc hai là một đường cong parabol đối xứng.',
        hint: 'Đường cong có dạng hình chữ U hoặc úp ngược.'
      },
      {
        id: 'u4-w3',
        term: 'Vertex',
        phonetic: '/ˈvɜːrtɛks/',
        meaning: 'Đỉnh của Parabol',
        formula: 'I(-b / 2a, -Δ / 4a)',
        exampleEn: 'The vertex represents the highest or lowest point.',
        exampleVi: 'Đỉnh parabol là điểm cao nhất hoặc thấp nhất của đồ thị.',
        hint: 'Điểm cực trị nơi parabol đổi chiều biến thiên.'
      },
      {
        id: 'u4-w4',
        term: 'Axis of symmetry',
        phonetic: '/ˈæksɪs əv ˈsɪmɪtri/',
        meaning: 'Trục đối xứng',
        formula: 'x = -b / (2a)',
        exampleEn: 'The vertical line x = 2 is the axis of symmetry.',
        exampleVi: 'Đường thẳng đứng x = 2 là trục đối xứng của parabol.',
        hint: 'Đường thẳng chia đôi parabol thành hai nhánh đối xứng.'
      },
      {
        id: 'u4-w5',
        term: 'Discriminant',
        phonetic: '/dɪˈskrɪmɪnənt/',
        meaning: 'Biệt thức Delta (Δ)',
        formula: 'Δ = b² - 4ac',
        exampleEn: 'Calculate the discriminant to determine root nature.',
        exampleVi: 'Tính biệt thức delta để xác định số nghiệm của PT.',
        hint: 'Đại lượng xác định phương trình có bao nhiêu nghiệm.'
      },
      {
        id: 'u4-w6',
        term: 'Viète\'s formulas',
        phonetic: '/viˈɛt ˈfɔːrmjələz/',
        meaning: 'Hệ thức Viète',
        formula: 'S = x₁ + x₂ = -b/a; P = x₁x₂ = c/a',
        exampleEn: 'Apply Viète\'s formulas to find the sum and product of roots.',
        exampleVi: 'Áp dụng hệ thức Viète để tìm tổng và tích các nghiệm.',
        hint: 'Mối quan hệ giữa các nghiệm và hệ số của PT bậc 2.'
      },
      {
        id: 'u4-w7',
        term: 'Distinct roots',
        phonetic: '/dɪˈstɪŋkt ruːts/',
        meaning: 'Hai nghiệm phân biệt',
        formula: 'Δ > 0',
        exampleEn: 'When delta is greater than zero, the equation has two distinct roots.',
        exampleVi: 'Khi delta lớn hơn 0, phương trình có 2 nghiệm phân biệt.',
        hint: 'Hai nghiệm có giá trị khác nhau.'
      },
      {
        id: 'u4-w8',
        term: 'Double root',
        phonetic: '/ˈdʌbəl ruːt/',
        meaning: 'Nghiệm kép',
        formula: 'Δ = 0, x₁ = x₂ = -b/(2a)',
        exampleEn: 'A zero discriminant indicates a double root.',
        exampleVi: 'Delta bằng 0 chứng tỏ phương trình có nghiệm kép.',
        hint: 'Hai nghiệm trùng nhau, đồ thị tiếp xúc Ox.'
      },
      {
        id: 'u4-w9',
        term: 'No real roots',
        phonetic: '/noʊ ˈriːəl ruːts/',
        meaning: 'Vô nghiệm thực',
        formula: 'Δ < 0',
        exampleEn: 'If delta is negative, there are no real roots.',
        exampleVi: 'Nếu delta âm, phương trình vô nghiệm thực.',
        hint: 'Đồ thị parabol không cắt trục hoành Ox.'
      },
      {
        id: 'u4-w10',
        term: 'Concave up',
        phonetic: '/kɒnˈkeɪv ʌp/',
        meaning: 'Bề lõm quay lên trên',
        formula: 'a > 0 (U shape)',
        exampleEn: 'Because a is positive, the parabola is concave up.',
        exampleVi: 'Vì a dương nên parabol có bề lõm hướng lên trên.',
        hint: 'Hàm số có giá trị nhỏ nhất tại đỉnh.'
      },
      {
        id: 'u4-w11',
        term: 'Concave down',
        phonetic: '/kɒnˈkeɪv daʊn/',
        meaning: 'Bề lõm quay xuống dưới',
        formula: 'a < 0 (inverted U)',
        exampleEn: 'Because a is negative, the parabola opens downward.',
        exampleVi: 'Vì a âm nên parabol có bề lõm hướng xuống dưới.',
        hint: 'Hàm số có giá trị lớn nhất tại đỉnh.'
      },
      {
        id: 'u4-w12',
        term: 'Quadratic formula',
        phonetic: '/kwɒˈdrætɪk ˈfɔːrmjələ/',
        meaning: 'Công thức nghiệm tổng quát',
        formula: 'x = (-b ± √Δ) / (2a)',
        exampleEn: 'Memorize the quadratic formula to solve any second-degree equation.',
        exampleVi: 'Ghi nhớ công thức nghiệm để giải bất kỳ phương trình bậc hai nào.',
        hint: 'Công thức tìm x theo hệ số a, b, c và delta.'
      },
      {
        id: 'u4-w13',
        term: 'Complete the square',
        phonetic: '/kəmˈpliːt ðə skwɛr/',
        meaning: 'Phương pháp tách bình phương',
        formula: 'x² + bx = (x + b/2)² - (b/2)²',
        exampleEn: 'Complete the square to convert into vertex form.',
        exampleVi: 'Tách hằng đẳng thức để đưa về dạng tọa độ đỉnh.',
        hint: 'Thêm bớt hạng tử để tạo thành bình phương một nhị thức.'
      },
      {
        id: 'u4-w14',
        term: 'Sum of roots',
        phonetic: '/sʌm əv ruːts/',
        meaning: 'Tổng hai nghiệm',
        formula: 'S = x₁ + x₂ = -b/a',
        exampleEn: 'The sum of roots is easily calculated using -b over a.',
        exampleVi: 'Tổng hai nghiệm dễ dàng tính bằng công thức -b chia cho a.',
        hint: 'Hệ thức Viète cho tổng S.'
      },
      {
        id: 'u4-w15',
        term: 'Product of roots',
        phonetic: '/ˈprɒdʌkt əv ruːts/',
        meaning: 'Tích hai nghiệm',
        formula: 'P = x₁ · x₂ = c/a',
        exampleEn: 'The product of roots equals constant term c divided by a.',
        exampleVi: 'Tích hai nghiệm bằng hệ số tự do c chia cho hệ số a.',
        hint: 'Hệ thức Viète cho tích P.'
      },
      {
        id: 'u4-w16',
        term: 'Opposite signs',
        phonetic: '/ˈɒpəzɪt saɪnz/',
        meaning: 'Hai nghiệm trái dấu',
        formula: 'P = x₁x₂ < 0 ⇔ ac < 0',
        exampleEn: 'When a and c have opposite signs, there are two roots of opposite signs.',
        exampleVi: 'Khi a và c trái dấu, phương trình luôn có hai nghiệm trái dấu.',
        hint: 'Một nghiệm dương và một nghiệm âm.'
      },
      {
        id: 'u4-w17',
        term: 'Same signs',
        phonetic: '/seɪm saɪnz/',
        meaning: 'Hai nghiệm cùng dấu',
        formula: 'Δ ≥ 0 and P > 0',
        exampleEn: 'For roots of the same sign, the product P must be strictly positive.',
        exampleVi: 'Để hai nghiệm cùng dấu, tích P phải lớn hơn 0.',
        hint: 'Cùng là số dương hoặc cùng là số âm.'
      },
      {
        id: 'u4-w18',
        term: 'Reduced discriminant',
        phonetic: '/rɪˈdjuːst dɪˈskrɪmɪnənt/',
        meaning: 'Biệt thức thu gọn Delta phẩy (Δ\')',
        formula: 'Δ\' = (b\')² - ac (with b = 2b\')',
        exampleEn: 'Use the reduced discriminant when the b coefficient is even.',
        exampleVi: 'Dùng delta phẩy khi hệ số b là số chẵn để tính nhanh hơn.',
        hint: 'Công thức nghiệm thu gọn khi b chia hết cho 2.'
      },
      {
        id: 'u4-w19',
        term: 'Maximum value',
        phonetic: '/ˈmæksɪməm ˈvæljuː/',
        meaning: 'Giá trị lớn nhất (GTLN)',
        formula: 'y_max at vertex (when a < 0)',
        exampleEn: 'The projectile reaches its maximum value at the parabola vertex.',
        exampleVi: 'Vật thể đạt giá trị độ cao lớn nhất tại đỉnh parabol.',
        hint: 'Tung độ đỉnh khi bề lõm hướng xuống.'
      },
      {
        id: 'u4-w20',
        term: 'Minimum value',
        phonetic: '/ˈmɪnɪməm ˈvæljuː/',
        meaning: 'Giá trị nhỏ nhất (GTNN)',
        formula: 'y_min at vertex (when a > 0)',
        exampleEn: 'Find the minimum value of quadratic expression f(x).',
        exampleVi: 'Tìm giá trị nhỏ nhất của biểu thức bậc hai f(x).',
        hint: 'Tung độ đỉnh khi bề lõm hướng lên.'
      }
    ]
  },
  {
    id: 5,
    slug: 'right-triangle-trigonometry',
    color: '#f43f5e',
    bgColor: '#fff1f2',
    accentColor: '#e11d48',
    titleEn: 'Unit 5: Right Triangle Trigonometry',
    titleVi: 'Unit 5: Hệ thức lượng & Tỉ số Lượng giác Tam giác vuông',
    descEn: 'Hypotenuse, Leg, Sine, Cosine, Tangent, Pythagorean theorem',
    descVi: 'Cạnh huyền, Cạnh góc vuông, Sin, Cos, Tan, Định lý Pytago',
    topic: 'Trigonometry & Right Triangles',
    words: [
      {
        id: 'u5-w1',
        term: 'Right triangle',
        phonetic: '/raɪt ˈtraɪˌæŋɡəl/',
        meaning: 'Tam giác vuông',
        formula: 'Triangle with one 90° angle',
        exampleEn: 'A right triangle has one right angle of 90 degrees.',
        exampleVi: 'Tam giác vuông có một góc vuông bằng 90 độ.',
        hint: 'Tam giác có một góc 90°.'
      },
      {
        id: 'u5-w2',
        term: 'Hypotenuse',
        phonetic: '/haɪˈpɒtənuːs/',
        meaning: 'Cạnh huyền',
        formula: 'c in a² + b² = c² (opposite 90°)',
        exampleEn: 'The hypotenuse is the longest side of a right triangle.',
        exampleVi: 'Cạnh huyền là cạnh dài nhất của một tam giác vuông.',
        hint: 'Cạnh đối diện với góc vuông 90°.'
      },
      {
        id: 'u5-w3',
        term: 'Leg',
        phonetic: '/lɛɡ/',
        meaning: 'Cạnh góc vuông',
        formula: 'Sides adjacent to the 90° angle',
        exampleEn: 'The two legs meet at the right angle.',
        exampleVi: 'Hai cạnh góc vuông giao nhau tại đỉnh góc vuông.',
        hint: 'Hai cạnh kề với góc vuông.'
      },
      {
        id: 'u5-w4',
        term: 'Pythagorean theorem',
        phonetic: '/pɪˌθæɡəˈriːən ˈθɪərəm/',
        meaning: 'Định lý Pytago',
        formula: 'a² + b² = c²',
        exampleEn: 'By the Pythagorean theorem, 3² + 4² = 5².',
        exampleVi: 'Theo định lý Pytago, bình phương hai cạnh góc vuông bằng bình phương cạnh huyền.',
        hint: 'Định lý kinh điển liên hệ 3 cạnh tam giác vuông.'
      },
      {
        id: 'u5-w5',
        term: 'Sine',
        phonetic: '/saɪn/',
        meaning: 'Sin (Tỉ số lượng giác: Đối / Huyền)',
        formula: 'sin α = Opposite / Hypotenuse',
        exampleEn: 'Sine equals the ratio of opposite leg over hypotenuse.',
        exampleVi: 'Sin bằng tỉ số giữa cạnh đối và cạnh huyền.',
        hint: 'Tìm sin lấy đối chia huyền.'
      },
      {
        id: 'u5-w6',
        term: 'Cosine',
        phonetic: '/ˈkoʊsaɪn/',
        meaning: 'Cos (Tỉ số lượng giác: Kề / Huyền)',
        formula: 'cos α = Adjacent / Hypotenuse',
        exampleEn: 'Cosine is the ratio of adjacent leg to hypotenuse.',
        exampleVi: 'Cos bằng tỉ số giữa cạnh kề và cạnh huyền.',
        hint: 'Cos tìm kề chia huyền.'
      },
      {
        id: 'u5-w7',
        term: 'Tangent',
        phonetic: '/ˈtændʒənt/',
        meaning: 'Tan (Tỉ số lượng giác: Đối / Kề)',
        formula: 'tan α = Opposite / Adjacent',
        exampleEn: 'Tangent equals opposite side over adjacent side.',
        exampleVi: 'Tan bằng cạnh đối chia cho cạnh kề.',
        hint: 'Tan hãy tính đối chia kề.'
      },
      {
        id: 'u5-w8',
        term: 'Cotangent',
        phonetic: '/ˈkoʊtændʒənt/',
        meaning: 'Cot (Tỉ số lượng giác: Kề / Đối)',
        formula: 'cot α = Adjacent / Opposite',
        exampleEn: 'Cotangent is the reciprocal of tangent.',
        exampleVi: 'Cotang là nghịch đảo của tang, bằng kề chia đối.',
        hint: 'Cotang kề chia đối.'
      },
      {
        id: 'u5-w9',
        term: 'Opposite side',
        phonetic: '/ˈɒpəzɪt saɪd/',
        meaning: 'Cạnh đối (diện góc α)',
        formula: 'Side across from angle α',
        exampleEn: 'Identify the opposite side to angle A.',
        exampleVi: 'Xác định cạnh đối diện với góc A.',
        hint: 'Cạnh nhìn thẳng từ góc nhọn α.'
      },
      {
        id: 'u5-w10',
        term: 'Adjacent side',
        phonetic: '/əˈdʒeɪsənt saɪd/',
        meaning: 'Cạnh kề (kẹp góc α)',
        formula: 'Leg sharing angle α',
        exampleEn: 'The adjacent side lies between angle α and the 90° angle.',
        exampleVi: 'Cạnh kề nằm giữa góc α và góc vuông 90 độ.',
        hint: 'Cạnh góc vuông liền kề góc α.'
      },
      {
        id: 'u5-w11',
        term: 'Altitude',
        phonetic: '/ˈæltɪtuːd/',
        meaning: 'Đường cao ứng với cạnh huyền',
        formula: 'h² = b\' · c\'',
        exampleEn: 'The altitude to the hypotenuse divides the triangle into similar triangles.',
        exampleVi: 'Đường cao hạ xuống cạnh huyền chia tam giác thành hai tam giác đồng dạng.',
        hint: 'Đoạn thẳng vuông góc kẻ từ đỉnh góc vuông xuống cạnh huyền.'
      },
      {
        id: 'u5-w12',
        term: 'Projection',
        phonetic: '/prəˈdʒɛkʃən/',
        meaning: 'Hình chiếu của cạnh góc vuông',
        formula: 'b² = a · b\' (hệ thức lượng)',
        exampleEn: 'Length b\' is the projection of leg b onto the hypotenuse.',
        exampleVi: 'Đoạn b\' là hình chiếu của cạnh góc vuông b trên cạnh huyền.',
        hint: 'Đoạn thẳng tạo ra trên cạnh huyền bởi chân đường cao.'
      },
      {
        id: 'u5-w13',
        term: 'Trigonometric identity',
        phonetic: '/ˌtrɪɡənəˈmɛtrɪk aɪˈdɛntɪti/',
        meaning: 'Hằng đẳng thức lượng giác',
        formula: 'sin²α + cos²α = 1',
        exampleEn: 'The fundamental identity states that sin²α plus cos²α equals 1.',
        exampleVi: 'Hằng đẳng thức cơ bản khẳng định rằng sin²α + cos²α = 1.',
        hint: 'Công thức liên hệ nền tảng sin và cos.'
      },
      {
        id: 'u5-w14',
        term: 'Complementary angles',
        phonetic: '/ˌkɒmplɪˈmɛntəri ˈæŋɡəlz/',
        meaning: 'Hai góc phụ nhau (tổng 90°)',
        formula: 'α + β = 90° ⇒ sin α = cos β',
        exampleEn: 'For complementary angles, sine of one equals cosine of the other.',
        exampleVi: 'Với hai góc phụ nhau, sin góc này bằng cos góc kia.',
        hint: 'Hai góc có tổng số đo bằng 90°.'
      },
      {
        id: 'u5-w15',
        term: 'Geometric mean',
        phonetic: '/ˌdʒiːəˈmɛtrɪk miːn/',
        meaning: 'Trung bình nhân',
        formula: 'h = √(b\' · c\')',
        exampleEn: 'The altitude is the geometric mean of the two projections.',
        exampleVi: 'Đường cao là trung bình nhân của hai hình chiếu.',
        hint: 'Căn bậc hai của tích hai đại lượng.'
      },
      {
        id: 'u5-w16',
        term: 'Angle of elevation',
        phonetic: '/ˈæŋɡəl əv ˌɛləˈveɪʃən/',
        meaning: 'Góc nâng / Góc nhìn lên',
        formula: 'Angle above horizontal line',
        exampleEn: 'Measure the angle of elevation from the ground to the tower top.',
        exampleVi: 'Đo góc nâng từ mặt đất hướng lên đỉnh tháp.',
        hint: 'Góc tạo bởi đường nhìn lên và phương nằm ngang.'
      },
      {
        id: 'u5-w17',
        term: 'Angle of depression',
        phonetic: '/ˈæŋɡəl əv dɪˈprɛʃən/',
        meaning: 'Góc hạ / Góc nhìn xuống',
        formula: 'Angle below horizontal line',
        exampleEn: 'The lighthouse keeper noticed a ship at a 15° angle of depression.',
        exampleVi: 'Người gác hải đăng thấy một con tàu ở góc hạ 15 độ.',
        hint: 'Góc tạo bởi đường nhìn xuống và phương nằm ngang.'
      },
      {
        id: 'u5-w18',
        term: 'Solve a triangle',
        phonetic: '/sɒlv ə ˈtraɪˌæŋɡəl/',
        meaning: 'Giải tam giác',
        formula: 'Find all 3 sides and 3 angles',
        exampleEn: 'To solve a triangle means computing all remaining side lengths and angles.',
        exampleVi: 'Giải một tam giác nghĩa là tính toán tất cả các cạnh và góc còn lại.',
        hint: 'Tìm mọi yếu tố chưa biết của tam giác.'
      },
      {
        id: 'u5-w19',
        term: 'Acute angle',
        phonetic: '/əˈkjuːt ˈæŋɡəl/',
        meaning: 'Góc nhọn',
        formula: '0° < α < 90°',
        exampleEn: 'Both non-right angles in a right triangle are acute angles.',
        exampleVi: 'Cả hai góc còn lại trong tam giác vuông đều là góc nhọn.',
        hint: 'Góc có số đo lớn hơn 0° và nhỏ hơn 90°.'
      },
      {
        id: 'u5-w20',
        term: 'Inverse trigonometric',
        phonetic: '/ɪnˈvɜːrs ˌtrɪɡənəˈmɛtrɪk/',
        meaning: 'Lượng giác ngược (arcsin, arccos, arctan)',
        formula: 'α = arcsin(opp/hyp)',
        exampleEn: 'Use the inverse tangent button on the calculator to find angle measure.',
        exampleVi: 'Dùng phím arctan trên máy tính để tìm số đo góc khi biết tỉ số.',
        hint: 'Hàm tìm góc khi đã biết trước giá trị tỉ số lượng giác.'
      }
    ]
  },
  {
    id: 6,
    slug: 'circles-inscribed-angles',
    color: '#06b6d4',
    bgColor: '#ecfeff',
    accentColor: '#0891b2',
    titleEn: 'Unit 6: Circles & Inscribed Angles',
    titleVi: 'Unit 6: Đường tròn & Góc với Đường tròn',
    descEn: 'Radius, Chord, Tangent, Inscribed angle, Central angle, Cyclic quadrilateral',
    descVi: 'Bán kính, Dây cung, Tiếp tuyến, Góc nội tiếp, Tứ giác nội tiếp',
    topic: 'Circles & Geometry',
    words: [
      {
        id: 'u6-w1',
        term: 'Circle',
        phonetic: '/ˈsɜːrkəl/',
        meaning: 'Đường tròn',
        formula: '(O; R) - Set of equidistant points',
        exampleEn: 'A circle is the set of all coplanar points at radius distance R from center O.',
        exampleVi: 'Đường tròn là tập hợp tất cả các điểm cách tâm O một khoảng cách bằng R.',
        hint: 'Hình tròn đồng quy cách đều tâm.'
      },
      {
        id: 'u6-w2',
        term: 'Radius',
        phonetic: '/ˈreɪdiəs/',
        meaning: 'Bán kính (R, r)',
        formula: 'Distance from center to circle',
        exampleEn: 'The radius is half the diameter: r = d / 2.',
        exampleVi: 'Bán kính bằng một nửa đường kính: r = d / 2.',
        hint: 'Khoảng cách từ tâm đến bất kỳ điểm nào trên đường tròn.'
      },
      {
        id: 'u6-w3',
        term: 'Diameter',
        phonetic: '/daɪˈæmɪtər/',
        meaning: 'Đường kính (d)',
        formula: 'd = 2R (passes through center)',
        exampleEn: 'The diameter is the longest possible chord in any circle.',
        exampleVi: 'Đường kính là dây cung dài nhất có thể có trong đường tròn.',
        hint: 'Dây cung đi qua tâm đường tròn.'
      },
      {
        id: 'u6-w4',
        term: 'Chord',
        phonetic: '/kɔːrd/',
        meaning: 'Dây cung',
        formula: 'Segment joining two points on circle',
        exampleEn: 'A line segment connecting two points on a circle is called a chord.',
        exampleVi: 'Đoạn thẳng nối hai điểm trên đường tròn được gọi là dây cung.',
        hint: 'Đoạn thẳng nối 2 điểm thuộc đường tròn.'
      },
      {
        id: 'u6-w5',
        term: 'Arc',
        phonetic: '/ɑːrk/',
        meaning: 'Cung tròn',
        formula: 'Portion of circumference (e.g. ⌢AB)',
        exampleEn: 'An arc is an unbroken part of the circle circumference.',
        exampleVi: 'Cung tròn là một phần liền mạch trên chu vi đường tròn.',
        hint: 'Phần đường cong giữa hai điểm trên đường tròn.'
      },
      {
        id: 'u6-w6',
        term: 'Tangent line',
        phonetic: '/ˈtændʒənt laɪn/',
        meaning: 'Đường tiếp tuyến',
        formula: 'Line ⊥ Radius at point of tangency',
        exampleEn: 'A tangent line touches the circle at exactly one point.',
        exampleVi: 'Đường tiếp tuyến tiếp xúc với đường tròn tại duy nhất một điểm.',
        hint: 'Vuông góc với bán kính tại tiếp điểm.'
      },
      {
        id: 'u6-w7',
        term: 'Secant line',
        phonetic: '/ˈsiːkənt laɪn/',
        meaning: 'Cát tuyến',
        formula: 'Line cutting circle at 2 points',
        exampleEn: 'A secant line intersects the circle at two distinct points.',
        exampleVi: 'Cát tuyến là đường thẳng cắt đường tròn tại 2 điểm phân biệt.',
        hint: 'Đường thẳng xuyên qua đường tròn.'
      },
      {
        id: 'u6-w8',
        term: 'Central angle',
        phonetic: '/ˈsɛntrəl ˈæŋɡəl/',
        meaning: 'Góc ở tâm',
        formula: 'Vertex at center, ∠AOB = sđ ⌢AB',
        exampleEn: 'The measure of a central angle equals the measure of its intercepted arc.',
        exampleVi: 'Số đo của góc ở tâm bằng đúng số đo cung bị chắn.',
        hint: 'Góc có đỉnh trùng với tâm đường tròn.'
      },
      {
        id: 'u6-w9',
        term: 'Inscribed angle',
        phonetic: '/ɪnˈskraɪbd ˈæŋɡəl/',
        meaning: 'Góc nội tiếp',
        formula: 'Vertex on circle, measure = 1/2 arc',
        exampleEn: 'An inscribed angle equals half the measure of its intercepted arc.',
        exampleVi: 'Số đo góc nội tiếp bằng một nửa số đo của cung bị chắn.',
        hint: 'Góc có đỉnh nằm trên đường tròn và 2 cạnh chứa 2 dây cung.'
      },
      {
        id: 'u6-w10',
        term: 'Cyclic quadrilateral',
        phonetic: '/ˈsɪklɪk ˌkwɒdrɪˈlætərəl/',
        meaning: 'Tứ giác nội tiếp',
        formula: '∠A + ∠C = 180°, ∠B + ∠D = 180°',
        exampleEn: 'In a cyclic quadrilateral, opposite angles are supplementary.',
        exampleVi: 'Trong một tứ giác nội tiếp, tổng hai góc đối diện luôn bằng 180 độ.',
        hint: 'Tứ giác có 4 đỉnh cùng nằm trên một đường tròn.'
      },
      {
        id: 'u6-w11',
        term: 'Semicircle',
        phonetic: '/ˈsɛmiˌsɜːrkəl/',
        meaning: 'Nửa đường tròn',
        formula: 'Arc measure = 180°',
        exampleEn: 'Any inscribed angle subtended by a semicircle is a 90° right angle.',
        exampleVi: 'Góc nội tiếp chắn nửa đường tròn là góc vuông 90 độ.',
        hint: 'Cung có số đo đúng 180 độ (chắn đường kính).'
      },
      {
        id: 'u6-w12',
        term: 'Circumcircle',
        phonetic: '/ˈsɜːrkəmˌsɜːrkəl/',
        meaning: 'Đường tròn ngoại tiếp',
        formula: 'Circle passing through all vertices',
        exampleEn: 'The circumcenter is the center of the circumcircle.',
        exampleVi: 'Tâm đường tròn ngoại tiếp là giao điểm ba đường trung trực.',
        hint: 'Đường tròn đi qua tất cả các đỉnh của đa giác.'
      },
      {
        id: 'u6-w13',
        term: 'Incircle',
        phonetic: '/ˈɪnˌsɜːrkəl/',
        meaning: 'Đường tròn nội tiếp',
        formula: 'Circle tangent to all 3 sides',
        exampleEn: 'The incircle touches each side of the triangle tangentially.',
        exampleVi: 'Đường tròn nội tiếp tiếp xúc với cả ba cạnh của tam giác.',
        hint: 'Đường tròn nằm trong và tiếp xúc với tất cả các cạnh.'
      },
      {
        id: 'u6-w14',
        term: 'Perpendicular diameter',
        phonetic: '/ˌpɜːrpənˈdɪkjələr daɪˈæmɪtər/',
        meaning: 'Đường kính vuông góc dây cung',
        formula: 'Bisects the chord and arc',
        exampleEn: 'A diameter perpendicular to a chord bisects that chord.',
        exampleVi: 'Đường kính vuông góc với dây cung thì đi qua trung điểm của dây đó.',
        hint: 'Quan hệ vuông góc giữa đường kính và dây cung.'
      },
      {
        id: 'u6-w15',
        term: 'Intercepted arc',
        phonetic: '/ˌɪntərˈsɛptɪd ɑːrk/',
        meaning: 'Cung bị chắn',
        formula: 'Arc enclosed between angle arms',
        exampleEn: 'Both angles intercept the same arc, so they are equal.',
        exampleVi: 'Hai góc cùng chắn một cung thì có số đo bằng nhau.',
        hint: 'Cung nằm bên trong góc.'
      },
      {
        id: 'u6-w16',
        term: 'Tangent-chord angle',
        phonetic: '/ˈtændʒənt kɔːrd ˈæŋɡəl/',
        meaning: 'Góc tạo bởi tiếp tuyến và dây cung',
        formula: 'Measure = 1/2 intercepted arc',
        exampleEn: 'The angle between tangent and chord equals the inscribed angle.',
        exampleVi: 'Góc tạo bởi tia tiếp tuyến và dây cung bằng góc nội tiếp cùng chắn cung đó.',
        hint: 'Góc có đỉnh tại tiếp điểm, một cạnh là tiếp tuyến, một cạnh là dây.'
      },
      {
        id: 'u6-w17',
        term: 'Orthocenter',
        phonetic: '/ˈɔːrθoʊˌsɛntər/',
        meaning: 'Trực tâm tam giác',
        formula: 'Intersection of 3 altitudes',
        exampleEn: 'The three altitudes of any triangle intersect at the orthocenter.',
        exampleVi: 'Ba đường cao của một tam giác đồng quy tại trực tâm.',
        hint: 'Giao điểm của ba đường cao trong tam giác.'
      },
      {
        id: 'u6-w18',
        term: 'Centroid',
        phonetic: '/ˈsɛntrɔɪd/',
        meaning: 'Trọng tâm tam giác',
        formula: 'Intersection of 3 medians (ratio 2/3)',
        exampleEn: 'The centroid divides each median in a two-to-one ratio.',
        exampleVi: 'Trọng tâm chia mỗi đường trung tuyến theo tỉ lệ 2 phần 3.',
        hint: 'Giao điểm của ba đường trung tuyến.'
      },
      {
        id: 'u6-w19',
        term: 'Circumcenter',
        phonetic: '/ˈsɜːrkəmˌsɛntər/',
        meaning: 'Tâm đường tròn ngoại tiếp',
        formula: 'Intersection of perpendicular bisectors',
        exampleEn: 'For a right triangle, the circumcenter is the midpoint of the hypotenuse.',
        exampleVi: 'Với tam giác vuông, tâm ngoại tiếp chính là trung điểm cạnh huyền.',
        hint: 'Giao điểm ba đường trung trực.'
      },
      {
        id: 'u6-w20',
        term: 'Incenter',
        phonetic: '/ˈɪnˌsɛntər/',
        meaning: 'Tâm đường tròn nội tiếp',
        formula: 'Intersection of 3 angle bisectors',
        exampleEn: 'The incenter is equidistant from all three triangle sides.',
        exampleVi: 'Tâm nội tiếp cách đều ba cạnh của tam giác.',
        hint: 'Giao điểm ba đường phân giác trong.'
      }
    ]
  }
];

// Helper to get all words across units
export const ALL_WORDS = UNITS_DATA.flatMap(u => u.words);

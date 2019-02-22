#include <iostream>
#include <list>

enum class Color {
  Blue, Green, Brown
};

enum class Sex {
  Male, Female
};

struct Student {
  Sex sex; 
  int height;
  Color eye_color;
};

std::ostream& operator<<(std::ostream& out, Color c) {
    switch (c) {
      case Color::Blue: out << "blue"; break;
      case Color::Green: out << "green"; break;
      case Color::Brown: out << "brown"; break;
      default: out << int(c); break;
    }
    return out;
}

std::ostream& operator<<(std::ostream& out, Sex s) {
    switch (s) {
      case Sex::Male: out << "male"; break;
      case Sex::Female: out << "female"; break;
    }
    return out;
}

bool bells_inequality(std::list<Student> students, int height, Color eye_color);


int main(int argc, char** argv) {
  std::list<Student> students {
    { Sex::Male, 165, Color::Green },
    { Sex::Female, 182, Color::Blue },
    { Sex::Male, 192, Color::Blue },
    { Sex::Female, 162, Color::Brown }
  };
  for (auto& s : students) {
    std::cout << "sex:" << s.sex <<
      ", height:" << s.height << 
      ", color:" << s.eye_color << '\n';
  }

  std::cout << std::boolalpha << bells_inequality(students, 181, Color::Brown) << '\n';
  return 0;
}

bool bells_inequality(std::list<Student> students,
                      int height,
                      Color eye_color) {
  std::list<Student> males_under;
  std::list<Student> all_taller_not_color;
  std::list<Student> males_not_color;
  for (auto& s : students) {
    if (s.sex == Sex::Male && s.height < height) {
      males_under.push_back(s);
    }
    if (s.height > height && s.eye_color != eye_color) {
      all_taller_not_color.push_back(s);
    }
    if (s.sex == Sex::Male && s.eye_color != eye_color) {
      males_not_color.push_back(s);
    }
  }
  std::cout << males_under.size() << "+" << all_taller_not_color.size() << ">=" << males_not_color.size() << '\n';
  return males_under.size() + all_taller_not_color.size() >= males_not_color.size();
}


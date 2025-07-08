#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int romanToInt(string s)
    {
        if (s.length() < 1)
        {
            return -1;
        }

        for (char &ch : s)
        {
            ch = toupper(ch);
        }

        unordered_map<char, int> roman = {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}};

        int result = 0;

        for (int i = 0; i < s.length(); i++)
        {
            if (i + 1 < s.length() && roman[s[i]] < roman[s[i + 1]])
            {
                result -= roman[s[i]];
            }
            else
            {
                result += roman[s[i]];
            }
        }

        return result;
    }
};

int main()
{
    Solution s1;
    cout << "Enter the Roman number to convert: ";
    string s;
    cin >> s;

    int value = s1.romanToInt(s);
    cout << "\nAfter conversion: " << value << endl;

    return 0;
}

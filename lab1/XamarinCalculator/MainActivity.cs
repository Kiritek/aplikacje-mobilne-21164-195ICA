using Android.App;
using Android.Widget;
using Android.OS;
using Android.Views;
using System;
using System.Globalization;
using Android;

namespace XamarinCalculator
{
    [Activity(Label = "XamarinCalculator", MainLauncher = true)]
    public class MainActivity : Activity
    {
        private TextView calculatorText;

        private string[] numbers = new string[2];
        private string @operator;

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);

            calculatorText = FindViewById<TextView>(Resource.Id.calculator_text_view);
        }

        [Java.Interop.Export("ButtonClick")]
        public void ButtonClick (View v)
        {
            Button button = (Button)v;
            if ("0123456789.".Contains(button.Text))
                AddDigitOrDecimalPoint(button.Text);
            else if ("÷×+-".Contains(button.Text))
                AddOperator(button.Text);
            else if ("=" == button.Text)
                Calculate();
            else
                Erase();
        }

        private void AddDigitOrDecimalPoint(string value)
        {
            int index = @operator == null ? 0 : 1;

            if (value == "." && numbers[index].Contains("."))
                return;

            numbers[index] += value;

            UpdateCalculatorText();
        }

        private void AddOperator(string value)
        {
            if (numbers[1] != null)
            {
                Calculate(value);
                return;
            }

            @operator = value;

            UpdateCalculatorText();
        }

        private void Calculate(string newOperator = null)
        {
            double? result = null;
            bool divideByZero = false;
            double? first = numbers[0] == null ? null : (double?)double.Parse(numbers[0], CultureInfo.InvariantCulture);
            double? second = numbers[1] == null ? null : (double?)double.Parse(numbers[1], CultureInfo.InvariantCulture);

            switch (@operator)
            {
                case "÷":
                    if (second == 0)
                    {
                        divideByZero = true;
                    }
                    else
                    {
                        result = first / second;
                    }
                    break;
                case "×":
                    result = first * second;
                    break;
                case "+":
                    result = first + second;
                    break;
                case "-":
                    result = first - second;
                    break;
            }

            if (result != null || divideByZero)

            {
                
                numbers[0] = result.ToString();
                @operator = newOperator;
                numbers[1] = null;
                if (divideByZero)
                {
                    numbers[0]= null;
                    DivideByZeroException();
                   
                }
                else
                {
                    UpdateCalculatorText();

                }
            }
        }

        private void Erase()
        {
            numbers[0] = numbers[1] = null;
            @operator = null;
            UpdateCalculatorText();
        }

        private void UpdateCalculatorText() => calculatorText.Text = $"{string.Format("{0:0.000000}", numbers[0])} {@operator} {numbers[1]}";
        private void DivideByZeroException() => calculatorText.Text = "Undefined";
    }
}

